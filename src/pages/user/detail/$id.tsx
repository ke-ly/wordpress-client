/**
 * title: 详情页
 */
import React from 'react'
import styles from '../style.less'

export default function(props) {    
    const { id } = props.match.params
    return (
        <div className={styles.user}>
            <h1>detail---- --- { id }</h1>            
        </div>
    )
}
