import React from 'react'
// import { Alert } from 'antd'
import Header from '@/components/Header'
import SideMenu from '@/components/SideMenu'
import Footer from '@/components/Footer'
import styles from './index.less'

export type BasicLayoutComponent<P> = React.SFC<P>

export interface BasicLayoutProps extends React.Props<any> {
	history?: History
	location?: Location
}
export interface BasicLayoutState extends React.Props<any> {
	collapsed : boolean
}

class BasicLayout extends React.Component<BasicLayoutProps,BasicLayoutState>{

	constructor(props){
		super(props)
		this.state = {
			collapsed:false,
		}
	}

	async componentDidMount(){
		// const res = await axios.get('/api/users')
		// console.log(res);
		
	}

	toggleCollapsed = () => {
		this.setState({
			collapsed:!this.state.collapsed
		})
	}

	render(){
		const { children } = this.props		
		const { collapsed, } = this.state	
		
		return (
			<div className={styles.layout}>
				<Header 
					history={this.props.history}
					location={this.props.location}
					collapsed={collapsed} 
					onCollapsed={this.toggleCollapsed} />
				<SideMenu collapsed={collapsed}/>
				<main className={styles.main} style={{paddingLeft: collapsed ? 80 : 220}}>					
					<section className={styles.container}>
					{/* <Alert message={<div>
							<a className="link" href="https://codex.wordpress.org/Version_5.0.3">WordPress 5.0.3</a> 
								现已可用！<a href="https://codex.wordpress.org/Version_5.0.3" className="link" >请现在更新</a>。
							</div>} 
						type="info" showIcon /> */}

						{ children }

					</section>
					<Footer />
				</main>				
			</div>
		)
	}
}


export default BasicLayout
