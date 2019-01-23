import React from 'react'
import { Tooltip, Icon  } from 'antd'
import classNames from 'classnames'
import styles from './listOperations.less'

export interface IOptions {
    key : string | number
    icon : string 
    title : string 
    classNames ?: string
}

interface ListOperationProps {
    visible ?: boolean
    selectCount ?: number
    className ?: string
    options ?: IOptions[]
    onChange ?: (item:IOptions) => void
}

export default class ListOperations extends React.Component<ListOperationProps> {

    handleChange = (item:IOptions) => {
        const { onChange } = this.props
        if(onChange){
            onChange(item)
        }
    }

    render(){
        const { 
            visible = false,
            className,
            options,
            selectCount
        } = this.props
        let content:React.ReactNode = null
        if(visible){
            content = <div className={classNames(styles.ListOperations,className)}>
                <div className={styles.inner}>
                    {
                        selectCount && 
                        <div className={styles.selectCount}>
                            已选中{ selectCount }条数据
                        </div>
                    }
                    <div className={styles.options}>
                        {
                            options && options.map((item:IOptions) => (
                                <div 
                                    key={item.key} 
                                    onClick={()=>this.handleChange(item)}
                                    className={classNames(styles.optionItem,item.classNames && item.classNames)} >
                                    <Tooltip placement="top" title={item.title}>
                                        <Icon type={item.icon} theme="filled"/>
                                    </Tooltip>
                                </div>                               
                            ))
                        }
                    </div>
                </div>
            </div> 
        }

        return content
    }
}
