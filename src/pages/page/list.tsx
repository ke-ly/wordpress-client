/**
 * title: 页面
 */
import React from 'react'
import Link from 'umi/link'
import { Card ,Button, Table, Avatar } from 'antd'
import axios from 'axios'
import '@/config/axios.config'
import Page from '@/components/PageTpl'
import ListOperations from '@/components/ListOperations'
import Axios from '@/components/Axios'
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

const mockData = [
    {title:"首页",author:'maomao',comment:1,addtime:"2013-01-29",key:1},
    {title:"价格",author:'maomao',comment:1,addtime:"2013-01-29",key:2},
    {title:"帮助",author:'maomao',comment:1,addtime:"2013-01-29",key:3},
    {title:"案例",author:'maomao',comment:1,addtime:"2013-01-29",key:4},
    {title:"关于我们",author:'maomao',comment:1,addtime:"2013-01-29",key:5},
]

export default Axios(class PageList extends React.Component<any,PageListState> {
    state = {
        selected : [],
        visible : false,
        datas:mockData
    }

    handleListoperation = item => {
        console.log(item);        
    }

    async componentDidMount(){
        const res = await axios.post('/api/fun/getmenu')
        console.log(res);
        // this.setState({
        //     datas:res.data
        // })        
    }

    gotoCreate = () => {        
        this.props.history.push('/page/create')
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
                // action={<Button icon="plus" onClick={this.gotoCreate} type="primary">新建页面</Button>}
                >
                <Card>
                    <Table rowSelection={rowSelection} className="my-table" columns={columns} dataSource={this.state.datas}/>
                </Card>
                
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
