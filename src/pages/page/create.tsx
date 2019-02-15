/**
 * title: 新建页面
 */
import React from 'react'
import Link from 'umi/link'
import {  Card, Row, Col, Input, Select, Icon, InputNumber, Checkbox, } from 'antd'
import Page from '@/components/PageTpl'
import AxiosHOC from '@/components/AxiosHOC'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
// import ColorPicker from 'braft-extensions/dist/color-picker'
// import 'braft-extensions/dist/color-picker.css'
import styles from './page.less'


// BraftEditor.use(ColorPicker({
//     includeEditors: ['editor-with-color-picker'],
//     theme: 'light' // 支持dark和light两种主题，默认为dark
// }))

export default AxiosHOC(class PageList extends React.Component{

    state = {
        // 创建一个空的editorState作为初始值
        editorState: BraftEditor.createEditorState(null)
    }

    async componentDidMount(){
              
    }

    submitContent = async () => {
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = this.state.editorState.toHTML()
        console.log(htmlContent);
        
    }

    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }

    render(){   
        const { editorState } = this.state     
        return (
            <Page 
                title="新建页面" 
                >
                <Row gutter={24}>
                    <Col span={18}>
                        <div>
                            <Input placeholder="在此输入标题" size='large'/>
                        </div>
                        {/* <div className='m-t-md'>
                            <Button>添加媒体</Button>
                        </div> */}
                        <div className="BraftEditor m-t-md">
                            <BraftEditor
                                id="editor-with-color-picker"
                                contentStyle={{height:390}}
                                controls={['italic', 'underline', 'text-color','text-align', 'separator', 'link', 'separator', 'media']}
                                value={editorState}
                                onChange={this.handleEditorChange}
                                onSave={this.submitContent}
                            />
                        </div>
                        <Card title="讨论" className='m-t-md'>
                            <div>
                                <Checkbox key='1'>允许评论</Checkbox>
                            </div>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="发布" className="m-b-md" actions={[
                            <div><Icon type="eye" /><span className="m-l-xs">预览</span></div>,
                            <div><Icon type="file-add" /><span className="m-l-xs">草稿</span></div>,                           
                            <div><Icon type="check-circle" /><span className="m-l-xs">发布</span></div>,
                            <div><Icon type="delete" /><span className="m-l-xs">回收站</span></div>,
                        ]}> 
                            <div className="flex m-b-sm">
                                <span>状态：</span> 
                                <div className="flexitem">
                                    <b>草稿</b>
                                    <a className='link m-l-xs'>编辑</a>
                                </div>                      
                            </div> 
                            <div className="flex m-b-sm">
                                <span>公开度：</span> 
                                <div className="flexitem">
                                    <b>公开</b>
                                    <a className='link m-l-xs'>编辑</a>
                                </div>                      
                            </div> 
                        </Card>
                        <Card title="页面属性" className="m-b-md">
                            <div className="flex m-b-sm">
                                <span>父级：</span> 
                                <div className="flexitem">
                                    <Select style={{width:'100%'}}  defaultValue='none'>
                                        <Select.Option key='none'>(无父级)</Select.Option>
                                    </Select> 
                                </div>                      
                            </div>
                            <div className="flex m-b-sm">
                                <span>模板：</span> 
                                <div className="flexitem">
                                    <Select style={{width:'100%'}} defaultValue='none'>
                                        <Select.Option key='none'>(默认模板)</Select.Option>
                                    </Select> 
                                </div>                      
                            </div>
                            <div className="flex m-b-sm">
                                <span>排序：</span> 
                                <div className="flexitem">
                                    <InputNumber defaultValue={0}/> 
                                </div>                      
                            </div>
                            <div>
                                需要帮助？使用在页面标题上方的帮助选项卡。
                            </div>
                        </Card>
                        <Card title="特色图片" className="m-b-md">
                            <a href="" className='link'>设置特色图片</a>
                        </Card>
                    </Col>
                </Row>
                
            </Page>
        )
    }
}) 
