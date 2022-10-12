import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import App from '@views/App'
import { stores, StoresContext } from '@store/index'

const render = () => {
    ReactDOM.render(
        <Provider {...stores}>
            <StoresContext.Provider value={stores}>
                <App />
            </StoresContext.Provider>
        </Provider>,
        document.querySelector('#app')
    )
}

render()
