import React from 'react'
import styles from './layout.less'

export default function withoutLogin(props){
    return <section  className={styles.withoutLogin}>
        <div className={styles.container}>
            { props.children }
        </div>
    </section>
}