import React from 'react'
import { Card , Row, Col } from 'antd'
import Link from 'umi/link'
// import './index.css'
import Page from '@/components/PageTpl'
class Dashboard extends React.Component {
    render(){
        return (
            <Page                 
                title="仪表盘" >
                <Row gutter={24}>
                    <Col span={6}>
                        <Card bordered={false}>
                            45787
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card bordered={false}>
                            45787
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card bordered={false}>
                            45787
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card bordered={false}>
                            45787
                        </Card>
                    </Col>
                </Row>
                <Row gutter={24} style={{marginTop:24}}>
                    <Col span={24}>
                        <Card title="访问量" bordered={false} bodyStyle={{height:400}}>
                            123
                        </Card>
                    </Col>
                </Row>
                <Row gutter={24} style={{marginTop:24}}>
                    <Col span={24}>
                        <Card title="操作日志" bordered={false} bodyStyle={{height:400}}>
                            123
                        </Card>
                    </Col>
                </Row>                
            </Page>
        )
    }
}

export default Dashboard
