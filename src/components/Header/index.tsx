import React, { Component } from 'react'
import { Icon } from 'antd'
import AjaxLoadBar from '@/components/AjaxLoadBar'
import Axios from '@/components/AxiosHOC'
import classNames from 'classnames'

import styles from './header.less'

interface HeaderProps {
	onCollapsed ?: () => void
	// axios ?:(e:any) => void
	collapsed : boolean	
}

class Header extends Component<HeaderProps>{
    state = {
		isloading:false,
		progress:1,
	}

	loading:any = null

	async componentDidMount(){		
		// const res = await this.props.axios.get('/api/users')
		// console.log(res,123);
		
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

export default Axios(Header)
