import React from 'react'
import Link from 'umi/link'
import styles from './index.css'


class Dashboard extends React.Component {

    render(){
        return (
            <div className={styles.normal}>
              <div className={styles.welcome} />
                <Link to="/user/test">to user</Link>
                <ul className={styles.list}>
                    <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
                    <li><a href="https://umijs.org/guide/getting-started.html">Getting Startqed</a></li>
                </ul>
            </div>
        )
    }
}

export default Dashboard
