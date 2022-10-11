import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'

import styles from './index.scss'
import Shared from '@shared/SharedTest'
import View from '@views/ViewTest'

var b = 1

const render = () => {
    ReactDOM.render(
        <div className={styles.test}>
            123
            <Button type="primary">asd</Button>
            <Shared />
            <View />
        </div>,
        document.querySelector('#app')
    )
}

render()
