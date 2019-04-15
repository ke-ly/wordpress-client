import React, { Component,  } from 'react'
import { Icon, Avatar, Dropdown, Menu, Badge, Button  } from 'antd'
import { BasicLayoutProps } from '../../layouts/index'
import AjaxLoadBar from '@/components/AjaxLoadBar'
// import Axios from '@/components/AxiosHOC'
import { UserContext, CounterContext } from '@/context'
import classNames from 'classnames'
import styles from './header.less'

export interface HeaderProps extends BasicLayoutProps {
	onCollapsed ?: () => void
	collapsed : boolean	
}
export interface HeaderState {
	pathname:string
	isloading:number
	progress:boolean
	nowDate:string
}

const Month:string[] = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov',"Dec"]  

const getDate = ():string => {
	let str:string = ''
	const date = new Date()	
	const Mon = Month[date.getMonth()]
	const Day = date.getDay().toString().padStart(2,'0')
	const Hour = date.getHours().toString().padStart(2,'0')
	const Min = date.getMinutes().toString().padStart(2,'0')	
	str = `
		${Mon} ${Day}, ${Hour}:${Min}
	`
	return str
}

class Header extends Component<HeaderProps>{
    state = {
		isloading:false,
		progress:0,
		pathname:this.props.location.pathname,
		nowDate:getDate()
	}

	loading:any = null
	timer:any = null

	static getDerivedStateFromProps (props:HeaderProps,state:HeaderState){		
		if(props.location.pathname !== state.pathname){
			return{
				pathname:props.location.pathname,
				isloading:false,
				progress:0, 
				nowDate:getDate()
			}
		}
		return null 
	}

	componentDidUpdate(prevProps:HeaderProps){
		if(this.props.location.pathname !== prevProps.location.pathname){
			setTimeout(()=>{
				this.imitateLoading()
			},400)
		}		
	}

	imitateLoading (){
		this.setState({isloading:true})
		let progress = 0
		this.loading = setInterval(()=>{
			const random = Math.floor(Math.random()*80)			
			progress = this.state.progress + random
			this.setState({ progress })
			if(progress >= 100){
				this.setState({ 
					progress:100,
					isloading:false
				})
				clearInterval(this.loading)
			}
		},500)
	}

	async componentDidMount(){	
		this.imitateLoading()	
	 	this.timer = setInterval(()=>{
			this.setState({
				nowDate:getDate()
			})				
		},1000)		
	}

	componentWillUnmount(){  		
		clearInterval(this.loading) 
		clearInterval(this.timer)
		this.setState({isloading:false})
    }
	
    render(){
		const { collapsed } = this.props
		const { isloading, progress, nowDate } = this.state	
		const avatarMenu = (
			<Menu className={styles.header_dropdown}>
				<Menu.Item>
					<Icon type="user" />
					<span>个人中心</span>
				</Menu.Item>
				<Menu.Divider />
				<Menu.Item>
					<Icon type="logout" />
					<span>退出登录</span>
				</Menu.Item>
			</Menu>
		)		
		
        return(
			<UserContext.Consumer>
				{
					(userInfo) => (
						<header className={classNames('header',styles.header)}>
							<AjaxLoadBar isloading={isloading} progress={progress}/>  
							<div className={styles.header_content}>
								<div className={classNames(styles.logo,collapsed ? styles.collapsed : null)}>
									<a href="/">					
										{
											collapsed ? <b>W<i>P</i></b> : <span>Word<i>Press</i></span>
										}								
									</a>
								</div>
								<div className={styles.header_actions}>
									<a href="javascript:" className={styles.side_collapsed} onClick={this.props.onCollapsed}> 
										{
											collapsed ? <Icon type="menu-unfold" /> : <Icon type="menu-fold" />
										}							
									</a>
									
									{/* <CounterContext.Consumer>
										{
											({count, changeCount}) => (
												<b>
													{ count }
													<Button onClick={()=>changeCount(1)}>加1</Button>
													<Button onClick={()=>changeCount(-1)}>减1</Button>
												</b>
											)
										}
									</CounterContext.Consumer>*/}										
								
									<ul className={styles.header_right}>
										<li className={styles.now_date}>
											<Icon type="clock-circle" />
											{ nowDate }
										</li>							
										<li className={styles.bell}>								
											<Badge count={11}>
												<Icon type="bell" />
											</Badge>
										</li>							
										<Dropdown overlay={avatarMenu} placement="bottomRight" overlayStyle={{marginLeft:12}}>
											<li className={styles.head_avatar}>
												<div >
													<Avatar icon="user"/>	
													<span className={styles.user_name}>{userInfo.name}</span>
												</div>
											</li>
										</Dropdown>	
									</ul>
								</div>
							</div>   				            
						</header>
					) 
				}				
			</UserContext.Consumer>
        )
    }
}

export default Header
