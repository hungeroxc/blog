import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import routerMap from './routerMap'

const App = () => {
    return (
        <Suspense>
            <Router>
                <Routes>
                    {routerMap.map((item) => {
                        return (
                            <Route key={item.path} path={item.path} element={<item.component />} />
                        )
                    })}
                </Routes>
            </Router>
        </Suspense>
    )
}

export default App
