import React, { Component } from 'react'
import { Menu, Icon, } from 'antd'
import Link from 'umi/link'
import classNames from 'classnames'
import { BasicLayoutProps } from '../../layouts/index'

import styles from './sidemenu.less'

const SubMenu = Menu.SubMenu

interface IMenu {
    path : string
    name : string
    icon ?: string
    children ?: Array<IMenu>
}

interface SideBarProps extends BasicLayoutProps {
    collapsed : boolean
    menuData ?: Array<IMenu>
}

interface SideBarState {
    openKeys : string[]
    rootSubmenuKeys : string[]
    selectedKeys : string[]
    pathname : string
}

class SideMenu extends Component<SideBarProps,SideBarState>{      
	state:SideBarState = {
        pathname:'/',
        openKeys: [],
        rootSubmenuKeys:[],    
        selectedKeys:['/']  
    }    

    componentDidMount(){
        const { location:{ pathname } } = this.props 
        this.setState({
            openKeys:['/'+pathname.substring(1).split('/')[0]]
        })
    }

    static getDerivedStateFromProps(props:SideBarProps,state:SideBarState){        
        if(props.location.pathname !== state.pathname){
            return {
                pathname:props.location.pathname,
                selectedKeys:[props.location.pathname],
                rootSubmenuKeys:props.menuData.map(i=>i.path)
            }
        }   
        return null 
    }

    onOpenChange = (openKeys:string[]) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys })
        }else{
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            })
        }
    }

    getIcon = (icon:string):React.ReactNode => {
        if(icon){
            return <Icon type={icon} />
        }
        return null
    }
    
    renderMenuItem = (menuData:Array<IMenu>):React.ReactNode => {
        return menuData.filter(item => item.name).map(item => 
        {
            if(item.children && item.children.some(child=> child.name !== '')){
                return(
                    <SubMenu key={item.path} title={<span>{this.getIcon(item.icon)}<span>{ item.name }</span></span>}>
                        { this.renderMenuItem(item.children) }
                    </SubMenu>
                )   
            }
            return(
                <Menu.Item key={item.path}>
                    <Link to={item.path}>
                        { this.getIcon(item.icon) }                        
                        <span>{item.name}</span>
                    </Link>
                </Menu.Item>
            ) 
        })        
    }

    render(){     
        const { collapsed, menuData } = this.props
        const { selectedKeys } = this.state        
        console.log('sideMenu render')        
        return(
            <aside className={styles.aside} style={{width: collapsed ? 80 : 220}}>
                <Menu
                    mode="inline"
                    selectedKeys={selectedKeys}
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    inlineCollapsed={collapsed}
                    >
                    {
                        this.renderMenuItem(menuData)
                    }
                </Menu>
            </aside> 
        )
    }
}

export default SideMenu
