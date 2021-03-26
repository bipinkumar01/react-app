import React from 'react';
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, auth, ...rest }) => (
   
    <Route {...rest} render={(props) => (
        (auth==="true" ||  auth===true)
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)
  
export default AuthRoute;