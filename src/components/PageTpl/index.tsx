import React from 'react'
import classNames from 'classnames'
import Link from 'umi/link'

import styles from './pagetpl.less'
type ThemeMode = 'white' | 'transparent'
export interface PageTplProps {
    theme ?: ThemeMode
    className ?: string
    children?: React.ReactNode
    logo ?: string | React.ReactNode
    title ?: string | React.ReactNode
    action ?: string | React.ReactNode    
    content ?: string | React.ReactNode
    extraContent ?: string | React.ReactNode    
}

class PageTemplate extends React.Component<PageTplProps> {
    render(){
        const { 
            children, 
            className, 
            logo, 
            theme="transparent", 
            title,
            action,
            content,
            extraContent,
        } = this.props
        const cls = classNames(styles.page,theme === 'transparent' ? styles.transparent : styles.white,className) 
        return (
            <div className={cls}>
                <div className={styles.pageHeader}>
                    {
                        logo && <div className={styles.logo}> { logo } </div>
                    }
                    <div className={styles.main}>
                        <div className="flex">
                            <h1 className="flexitem">{ title }</h1>
                            <div className={styles.action}>
                                { action }
                            </div>
                        </div>
                        <div className="flex">
                            { content && <div className={classNames(styles.content,'flexitem')}>{ content }</div> }
                            { extraContent && <div className={styles.extraContent}>{ extraContent }</div> }
                        </div>
                    </div>
                </div>
               <div className={styles.pageContent}>
                    { children }
               </div>
            </div>
        )
    }
}

export default PageTemplate
