import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'
import { getStores } from '@store/index'

import styles from './index.scss'

const PageA = () => {
    const navigate = useNavigate()
    const { numStore } = getStores()
    return (
        <div className={styles.ttest}>
            pagea
            {numStore.num}
            <Button onClick={() => navigate('/page-b')}>点击</Button>
            <Button onClick={() => numStore.increase()}>+</Button>
            <div>{process.env.NODE_ENV}</div>
            <div>测试自动化构</div>
        </div>
    )
}

export default observer(PageA)
