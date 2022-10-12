import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'
import { getStores } from '@store/index'

const PageA = () => {
    const navigate = useNavigate()
    const { numStore } = getStores()
    return (
        <div>
            pagea
            {numStore.num}
            <Button onClick={() => navigate('/page-b')}>点击</Button>
            <Button onClick={() => numStore.increase()}>+</Button>
        </div>
    )
}

export default observer(PageA)
