import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const PageA = () => {
    const navigate = useNavigate()
    return (
        <div>
            pagea
            <Button onClick={() => navigate('/page-b')}>点击</Button>
        </div>
    )
}

export default PageA
