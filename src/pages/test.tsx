import React, { useState, useEffect } from 'react' 
import { Button } from 'antd'
import Page from '@/components/PageTpl'

export default function TestHooks () : React.ReactNode {
    const [ count, setCount ] = useState(12)
    const [ arr,setArr ] = useState([])
   
   
    const initDat = () => {
        return new Promise((resolve:(val:Array<number>)=>void)=>{                        
            setTimeout(()=>{
                resolve([1,23,4,5,6])
            },2000)
        })
    }

    const start = () => {
        console.log('start',count)        
    }

    const stop = () => {
        console.log('stop');
        
    }

    useEffect(()=>{   
        initDat().then((r:Array<number>)=>{                 
            setArr(r)
        })   
        start()
        return stop
    },[])
    
    
    return <Page>
        <h1>{count}</h1>
        <ul>
            {
                arr.map((i,idx)=>(
                    <li key={idx}>{i}</li>
                ))
            }
        </ul>
        <Button onClick={()=>{setCount(count+1)}}>
            Click1 
        </Button>
    </Page>
}