import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import SignUp from '../pages/signup/Signup';
import Login from '../pages/login/Login'
// eslint-disable-next-line
import AskQuestion from '../pages/askquestion/AskQuestion'



// eslint-disable-next-line
export default  () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/askquestion" component={AskQuestion} />
            </BrowserRouter>
        </div>
    )
}