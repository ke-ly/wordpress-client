/**
 * title: 详情页
 */
import React, { useContext } from 'react'
import { UserContext } from '@/context'
import styles from '../style.less'

export default function(props) {    
    const { id } = props.match.params
    const userInfo = useContext(UserContext)      
    return <div className={styles.user}>
        <h1>detail---- --- { id }</h1>   
        <h2> 名称:{ userInfo.name } </h2>         
    </div>
}
