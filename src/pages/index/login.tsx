import React, { Fragment, useState } from 'react'
import { Input, Button } from 'antd'
import axios from '@/components/Axios'

function Login (props) {    
    const [ phone, setPhone ] = useState()
    const [ password, setPwd ] = useState()
    const handleSubmit = () => {        
        props.axios.post('/api/home/login',{password,userName:phone})
    }

    const onchange = (e,type) => {
        if(type === 'phone'){
            setPhone(e.target.value) 
        }else{
            setPwd(e.target.value)
        }
    }
    
    return  (
        <Fragment>
            <Input value={phone} onChange={e=>onchange(e,'phone')}/>
            <Input type="password" value={password} onChange={e=>onchange(e,'password')}/>
            <Button type="primary" onClick={handleSubmit}>
                确定
            </Button>
        </Fragment>
    )
   
}
export default axios(Login)