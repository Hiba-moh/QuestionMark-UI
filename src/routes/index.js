import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import SignUp from '../pages/signup/Signup';
import Login from '../pages/login/Login';
import AllQuestions from '../pages/allquestions/AllQuestions';
import Answered from '../pages/answered/Answered';
import UnAnswered from '../pages/unanswered/UnAnswered';

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/allquestions" component={AllQuestions} />
        <Route path="/answered" component={Answered} />
        <Route path="/unAnswered" component={UnAnswered} />

      </BrowserRouter>
    </div>
  );
};
