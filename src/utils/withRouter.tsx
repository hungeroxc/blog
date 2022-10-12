import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const withRouter = (Component: typeof React.Component) => {
    const ComponentWithRouterProp = (props: any): JSX.Element => {
        const location = useLocation()
        const navigate = useNavigate()
        const params = useParams()
        return <Component {...props} router={{ location, navigate, params }} />
    }

    return ComponentWithRouterProp
}

export default withRouter
