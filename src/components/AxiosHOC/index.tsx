import React from 'react'
import axios from 'axios'
import '../../config/axios.config'


export default (Component:any) => {
    return props=>{
        return <Component {...props} axios={axios}/>
    }
}