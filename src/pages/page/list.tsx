/**
 * title: 页面
 */
import React from 'react'
import Link from 'umi/link'
import { Button, Table, Avatar } from 'antd'
// import axios from 'axios'
// import '@/config/axios.config'
import Page from '@/components/PageTpl'
import ListOperations from '@/components/ListOperations'
import AxiosHOC from '@/components/AxiosHOC'
import styles from './page.less'

interface IPageColumns {
    title : string
    author : string
    comment : number
    addtime : string
    key : number
}

interface PageListState {
    selected : IPageColumns[]
    visible ?: boolean
    datas ?: IPageColumns[]
}


export default AxiosHOC(class PageList extends React.Component<{},PageListState> {
    state = {
        selected : [],
        visible : false,
        datas:[]
    }

    handleListoperation = item => {
        console.log(item);        
    }

    async componentDidMount(){
        // const res = await axios.post('/api/page/list')
        // // console.log(res.code);
        // this.setState({
        //     datas:res.data
        // })
        console.log(this.props);
        
    }

    render(){
        const columns = [
            { title: '标题', dataIndex: 'title', width:"50%"},
            { title: '作者', dataIndex: 'author', render:(t:string)=>{
                return <span>
                    <Avatar style={{backgroundColor:"#7265e6",marginRight:8}}>M</Avatar>
                    { t }
                </span>
            } },
            { title: '评论', dataIndex: 'comment', },
            { title: '日期', dataIndex: 'addtime', },
        ]
        const data:IPageColumns[] = [
            
        ]
        const rowSelection = {
            onChange: (_, selectedRows:IPageColumns[]) => {
                this.setState({
                    selected:selectedRows,
                    visible : selectedRows.length > 0
                })
            }
        }
        return (
            <Page 
                title="页面" 
                action={<Button icon="plus" type="primary">新建页面</Button>}>
                <Table rowSelection={rowSelection} className="my-table" columns={columns} dataSource={this.state.datas}/>
                <ListOperations 
                    selectCount={this.state.selected.length}
                    visible={this.state.visible}
                    onChange={this.handleListoperation}
                    options={[                        
                        {icon:'eye',key:0,title:"查看"},
                        {icon:'edit',key:1,title:"编辑"},
                        {icon:'delete',key:2,title:"删除"},
                    ]}/>
            </Page>
        )
    }
}) 
