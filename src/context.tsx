import React,{ createContext, useState, useEffect } from 'react'

const DefaultUserInfo = { name:"",phone:"",level:"" }

export const UserContext =  createContext(null)
export const CounterContext =  createContext(null)

export function UserProvider (props) {
    const [user,useUser] = useState(DefaultUserInfo)
    useEffect(()=>{
        setTimeout(()=>{            
            useUser({name:"maomao",phone:'110',level:"免费版"})
        },1000)
    },[])       
    return <UserContext.Provider value={user}>
        { props.children }
    </UserContext.Provider>
}

export function CounterProvider (props) {
    const [count, setCount] = useState(0) 
    const changeCount = (type:number):void => {        
        setCount(count + type)        
    }    
    return <CounterContext.Provider value={{count,changeCount}}>
        { props.children }
    </CounterContext.Provider>
}

