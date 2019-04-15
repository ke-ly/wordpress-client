/**
 * title: 管理主题
 */
import React, { useState, useEffect } from 'react'
// import Link from 'umi/link'
import { Button, List, Card, Icon } from 'antd'
import Page from '@/components/PageTpl'
import styles from './exterior.less'

const ImgUrl = [
    'https://cdn.dribbble.com/users/418188/screenshots/6093913/fishing_ecommerce_website_design_tubik_2x.png',
    'https://cdn.dribbble.com/users/239075/screenshots/4797890/chat-by-iftikharshaikh.jpg',
    'https://cdn.dribbble.com/users/1094383/screenshots/5321441/800_2_still_2x.gif',
    'https://cdn.dribbble.com/users/1597272/screenshots/3988951/finance.png',
    'https://cdn.dribbble.com/users/1011159/screenshots/5167257/shot_v1_2x.png'
]

export default function ThemeList() {    
    const [theme, setTheme] = useState([])    

    useEffect(()=>{  
        setTheme(Array.from({ length: 19 },(_,idx)=>idx+1).map(i=>({key:i})))
    },[])

    return <Page
        title="主题" 
        action={<Button icon="plus" type="primary">添加</Button>}>
        <List
            grid={{ gutter: 24, column: 4}}
            dataSource={['',...theme]}
            renderItem={item=> item ? (
                <List.Item key={item.key}>
                    <Card                        
                        cover={<div className={styles.themeListCover}><img alt="example" src={ImgUrl[Math.floor(Math.random()*ImgUrl.length)]} /></div>}>
                        <div className={styles.themeListFooter}>
                            <Card.Meta title={<div style={{whiteSpace:"pre-line"}}>Twenty Fifteen</div>} description="October 17, 2008" /> 
                            <div className="btn-wrap">
                                <Button key="qiyong">启用</Button><Button type="primary" key="yulan">实时预览</Button>
                            </div>     
                        </div>                       
                    </Card>
                </List.Item>
            ):(
                <List.Item key={item.key}>
                    <Button type="dashed" className={styles.newButton}>
                        <Icon type="plus" /> 添加新主题
                    </Button>
                </List.Item> 
            )} />
    </Page>
}
