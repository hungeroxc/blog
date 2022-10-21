import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'mobx-react'
import 'antd/dist/antd.css'

import App from '@views/App'
import { stores, StoresContext } from '@store/index'

const root = ReactDOM.createRoot(document.querySelector('#app') as Element)

root.render(
    <Provider {...stores}>
        <StoresContext.Provider value={stores}>
            <App />
        </StoresContext.Provider>
    </Provider>
)
