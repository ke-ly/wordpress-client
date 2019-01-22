import React from 'react'
import { Button } from 'antd'
import Link from 'umi/link'
import styles from './index.css'
import Page from '@/components/PageTpl'

class Dashboard extends React.Component {
    render(){
        return (
            <Page title="控制台" action={<Button type='primary' icon='plus'>action</Button>}>
                ddd
            </Page>
        )
    }
}

export default Dashboard
