import React, { Component } from 'react'
import { Menu, Icon, Button } from 'antd'
import classNames from 'classnames'

import styles from './sidemenu.less'

const SubMenu = Menu.SubMenu


interface SideBarProps {
	collapsed : boolean
}

class SideMenu extends Component<SideBarProps>{      
	state = {
        openKeys: [],
    }    
    rootSubmenuKeys:string[] = ['dashboard','setting']  
    onOpenChange = (openKeys:string[]) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys })
        }else{
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            })
        }
    }
    
    render(){     
        const { collapsed } = this.props
        return(
            <aside className={styles.aside} style={{width: collapsed ? 80 : 220}}>
                <Menu
                    mode="inline"
                    // defaultSelectedKeys={['dashboard']}
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    inlineCollapsed={collapsed}
                    >
                    <Menu.Item key="dashboard">
                        <Icon type="dashboard" />
                        <span>控制台</span>
                    </Menu.Item>                    
                    <SubMenu key="page" title={<span><Icon type="desktop" /><span>页面</span></span>}>
                        <Menu.Item key="1">系统信息</Menu.Item>
                        <Menu.Item key="2">站内私信</Menu.Item>
                    </SubMenu>
                    <SubMenu key="theme" title={<span><Icon type="skin" /><span>外观</span></span>}>
                        <Menu.Item key="9">系统设置</Menu.Item>
                        <Menu.Item key="10">账户设置</Menu.Item>
                        <Menu.Item key="11">安全设置</Menu.Item>
                    </SubMenu>
                    <SubMenu key="article" title={<span><Icon type="read" /><span>文章</span></span>}>
                        <Menu.Item key="9">系统设置</Menu.Item>
                        <Menu.Item key="10">账户设置</Menu.Item>
                        <Menu.Item key="11">安全设置</Menu.Item>
                    </SubMenu>
                    <SubMenu key="comments" title={<span><Icon type="message" /><span>评论</span></span>}>
                        <Menu.Item key="9">系统设置</Menu.Item>
                        <Menu.Item key="10">账户设置</Menu.Item>
                        <Menu.Item key="11">安全设置</Menu.Item>
                    </SubMenu>
                    <SubMenu key="user" title={<span><Icon type="user" /><span>用户</span></span>}>
                        <Menu.Item key="9">系统设置</Menu.Item>
                        <Menu.Item key="10">账户设置</Menu.Item>
                        <Menu.Item key="11">安全设置</Menu.Item>
                    </SubMenu>
                    <SubMenu key="tools" title={<span><Icon type="tool" /><span>工具</span></span>}>
                        <Menu.Item key="9">系统设置</Menu.Item>
                        <Menu.Item key="10">账户设置</Menu.Item>
                        <Menu.Item key="11">安全设置</Menu.Item>
                    </SubMenu>
                    <SubMenu key="setting" title={<span><Icon type="setting" /><span>设置</span></span>}>
                        <Menu.Item key="9">系统设置</Menu.Item>
                        <Menu.Item key="10">账户设置</Menu.Item>
                        <Menu.Item key="11">安全设置</Menu.Item>
                    </SubMenu>
                </Menu>
            </aside> 
        )
    }
}

export default SideMenu
