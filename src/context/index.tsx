import React,{ createContext, useState, useEffect } from 'react'
import withAxios from '../components/Axios'
// import axios from 'axios'
// import '../../config/axios.config'
const DefaultUserInfo = { name:"",phone:"",level:"" }

export const UserContext =  createContext(null)
export const CounterContext =  createContext(null)

export const UserProvider = withAxios(function (props) {
    
    const [user,setUser] = useState(DefaultUserInfo)
    useEffect(()=>{
        setTimeout(()=>{            
            setUser({name:"maomao",phone:'110',level:"免费版"})
        },1000)
        props.axios.get('/api/user/info').then(res=>{
            console.log(res,1122334);
            
        })
    },[])       
    return <UserContext.Provider value={user}>
        { props.children }
    </UserContext.Provider>
})

export function CounterProvider (props) {
    const [count, setCount] = useState(0) 
    const changeCount = (type:number):void => {        
        setCount(count + type)        
    }    
    return <CounterContext.Provider value={{count,changeCount}}>
        { props.children }
    </CounterContext.Provider>
}


