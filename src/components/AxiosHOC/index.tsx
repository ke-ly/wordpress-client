import React from 'react'
import axios from 'axios'
import '../../config/axios.config'


export default (Component:React.ComponentType<any>) => {    
    return class extends React.Component {
        render(){
            return <Component {...this.props} axios={axios}/>
        }
    } 
}