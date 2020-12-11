import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import SignUp from '../pages/signup/Signup';
import Login from '../pages/login/Login'




export default () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
            </BrowserRouter>
        </div>
    )
}