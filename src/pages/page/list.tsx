/**
 * title: 页面
 */
import React from 'react'
import Link from 'umi/link'
import { Button, Table, Avatar } from 'antd'
import Page from '@/components/PageTpl'
import ListOperations from '@/components/ListOperations'
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
}

export default class PageList extends React.Component<{},PageListState> {

    state = {
        selected : [],
        visible : false
    }

    handleListoperation = item => {
        console.log(item);
        
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
            {title:"首页1",author:'maomao',comment:1,addtime:"2013-01-29",key:1},
            {title:"价格2",author:'maomao',comment:1,addtime:"2013-01-29",key:2},
            {title:"帮助3",author:'maomao',comment:1,addtime:"2013-01-29",key:3},
            {title:"案例4",author:'maomao',comment:1,addtime:"2013-01-29",key:4},
            {title:"关于我们5",author:'maomao',comment:1,addtime:"2013-01-29",key:5},
            {title:"首页6",author:'maomao',comment:1,addtime:"2013-01-29",key:11},
            {title:"价格7",author:'maomao',comment:1,addtime:"2013-01-29",key:22},
            {title:"帮助8",author:'maomao',comment:1,addtime:"2013-01-29",key:33},
            {title:"案例9",author:'maomao',comment:1,addtime:"2013-01-29",key:44},
            {title:"关于我们11",author:'maomao',comment:1,addtime:"2013-01-29",key:55},
            {title:"首页12",author:'maomao',comment:1,addtime:"2013-01-29",key:12},
            {title:"价格13",author:'maomao',comment:1,addtime:"2013-01-29",key:23},
            {title:"帮助14",author:'maomao',comment:1,addtime:"2013-01-29",key:34},
            {title:"案例15",author:'maomao',comment:1,addtime:"2013-01-29",key:45},
            {title:"关于我们16",author:'maomao',comment:1,addtime:"2013-01-29",key:56},
            {title:"首页17",author:'maomao',comment:1,addtime:"2013-01-29",key:117},
            {title:"价格18",author:'maomao',comment:1,addtime:"2013-01-29",key:228},
            {title:"帮助19",author:'maomao',comment:1,addtime:"2013-01-29",key:339},
            {title:"案例21",author:'maomao',comment:1,addtime:"2013-01-29",key:446},
            {title:"关于我们22",author:'maomao',comment:1,addtime:"2013-01-29",key:556},
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
                <Table rowSelection={rowSelection} className="my-table" columns={columns} dataSource={data}/>
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
}
