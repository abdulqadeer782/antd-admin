import { Link, Redirect, Route, Switch, useHistory, useLocation } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
import { useState, useEffect } from 'react'
import { capitalize } from "lodash"
import Dashboard from "../Pages/Dashboard";
import { loggedIn } from "../common/loggedIn.js";
import LoginPage from "../Pages/LoginPage";
import ForgotPasswordPage from "../Pages/ForgotPassPage";
import Users from '../Pages/Users'
import NotFound from "../Pages/notFound";
import { Breadcrumb,Divider } from "antd";
import AddUser from '../Components/Users/addUser'
import Profile from "../Pages/Profile";
import Module from "../Pages/Module";


const ContentComponent = () => {
    const history = useHistory()
    const location = useLocation()
    const [pathname, setPathname] = useState()


    useEffect(() => {
        setPathname(capitalize(location.pathname.replace("/", '')))
    }, [location])

    return (
        <Content style={{ padding: '20px 20px 0',minHeight:'85%'}}>
                <Switch>
                    <PublicRoute path="/sign-in" component={LoginPage} />
                    <PublicRoute path="/forgot-password" component={ForgotPasswordPage} />
                    <PrivateRoute exact path='/' >
                        <Dashboard />
                    </PrivateRoute>
                    <PrivateRoute path='/Users' >
                        <Users />
                    </PrivateRoute>
                    <PrivateRoute path='/User/AddUser' >
                        <AddUser/>
                    </PrivateRoute>
                    <PrivateRoute path='/Module' >
                        <Module/>
                    </PrivateRoute>
                    <PrivateRoute path='/profile' >
                        <Profile/>
                    </PrivateRoute>
                    <PrivateRoute>
                        <NotFound/>
                    </PrivateRoute>
                </Switch>
        </Content>
    )
}


function PrivateRoute({ children, ...rest }) {
    const [path] = useState("/sign-in")
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedIn() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: path,
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

function PublicRoute({ component: Component, ...rest }) {
    // console.log(loggedIn())
    return (
        <Route
            {...rest}
            render={(props) => !loggedIn() ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />}
        />
    )
}

export default ContentComponent