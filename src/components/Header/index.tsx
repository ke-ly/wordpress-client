import React, { Component } from 'react'
import { Icon } from 'antd'
import { BasicLayoutProps } from '../../layouts/index'
import AjaxLoadBar from '@/components/AjaxLoadBar'
// import Axios from '@/components/AxiosHOC'
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
}

class Header extends Component<HeaderProps>{
    state = {
		isloading:false,
		progress:0,
		pathname:this.props.location.pathname
	}

	loading:any = null

	static getDerivedStateFromProps (props:HeaderProps,state:HeaderState){		
		if(props.location.pathname !== state.pathname){
			return{
				pathname:props.location.pathname,
				isloading:false,
				progress:0
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
	}

	componentWillUnmount(){
		this.setState({isloading:false})
		clearInterval(this.loading)
    }
	
    render(){
		const { collapsed } = this.props
		const { isloading, progress, } = this.state	
        return(
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
					</div>
                </div>  				            
            </header>
        )
    }
}

export default Header
