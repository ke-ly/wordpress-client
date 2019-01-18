import React from 'react'
import styles from './index.css'


class Dashboard extends React.Component {

    render(){
        return (
            <div className={styles.normal}>
              <div className={styles.welcome} />
                <ul className={styles.list}>
                    <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
                    <li><a href="https://umijs.org/guide/getting-started.html">Getting Startqed</a></li>
                </ul>
            </div>
        )
    }
}

export default Dashboard
