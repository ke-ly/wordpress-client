/**
 * title: 管理主题
 */
import React from 'react'
import Link from 'umi/link'
import { Card ,Button, Table, Avatar } from 'antd'
import Page from '@/components/PageTpl'
import styles from './page.less'


export default class PageList extends React.Component {
    state = {
        
    }


    render(){
      
        return (
            <Page 
                title="主题" 
                action={<Button icon="plus" type="primary">添加</Button>}>
               
            </Page>
        )
    }
}
