import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'

import styles from './index.scss'

const render = () => {
    ReactDOM.render(
        <div className={styles.test}>
            123
            <Button type="primary">asd</Button>
        </div>,
        document.querySelector('#app')
    )
}

render()
