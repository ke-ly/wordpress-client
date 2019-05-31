import React from 'react'
import { Input, Button, Form, Icon, Checkbox  } from 'antd'
import styles from './index.less'
import axios from '@/components/Axios'

function Login(props) {
    const { getFieldDecorator, validateFields } = props.form

    const handleSubmit = (e) => {
        e.preventDefault()
        validateFields((err,val)=>{
            if(!err){
                props.axios.post('/api/user/login',val)
            }
        })       
    }

    return (
        <div className={styles.login}>
            <div className={styles.img}>
                <h2>Wordpress</h2>
            </div>
            <div className={styles.loginForm}>
                <div className={styles.hd}>
                    <h2>欢迎使用<span>WordPress</span></h2>
                    <p>我们是一款能让您建立出色网站、博客或应用的开源软件。</p>
                </div>
                <Form onSubmit={handleSubmit} className={styles.form}>
                    <Form.Item>
                        {
                            getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入您的用户名!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户名"
                                />,
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        {
                            getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入您的密码!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />,
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        {
                            getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>自动登录</Checkbox>)
                        }
                        <a className={styles.loginForgot} href="">
                            忘记密码
                        </a>
                        <div className={styles.btnWrap}>
                            <Button type="primary" htmlType="submit" className={styles.loginBtn}>
                                登录
                            </Button>
                            <Button  className={styles.regBtn}>
                                注册
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )

}
export default axios(Form.create()(Login))