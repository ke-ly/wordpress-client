import React from 'react'
import classNames from 'classnames'
import styles from './ajaxloadbar.less'
interface LoadBarProps {
    isloading:boolean
    progress:number
}

export default function(props:LoadBarProps) {
    return (
        <div className={classNames(styles.ajaxloadbar,props.isloading ? styles.isloading : null)}>
            <div className={styles.progress} style={{width:props.progress + '%'}}></div>
        </div>
    )
}
