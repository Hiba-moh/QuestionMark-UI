import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import SignUp from './pages/signup/Signup';
import Login from './pages/login/Login';
import ReplyPage from './pages/replyPage/ReplyPage';
import SelectedQuestionPage
  from './pages/selectedQuestionPage/SelectedQuestionPage';
import AllQuestions from './pages/allquestions/AllQuestions';
import Answered from './pages/answered/Answered';
import UnAnswered from './pages/unanswered/UnAnswered';
import AskQuestion from './pages/askquestion/AskQuestion';
import ProtectedRoutes from './components/protectedRoutes/ProtectedRoute';
import {AuthProvider, AuthContext} from './AuthContext';
import UserAsked from './components/replyComponent/UserAsked';
import UserAnswered from './components/replyComponent/UserAnswered';
import Profile from './components/ProfileComponent/Profile';
import AboutUsPage from "./pages/aboutUs/AboutUsPage"
import { Profiler } from 'react/cjs/react.development';

function App () {
  const responseGoogle = response => {
    console.log (response);
    console.log (response.profileObj);
  };

  return (
    <>
    <AuthProvider>

      <div className="App">
        <BrowserRouter>
          <Route path="/signup" component={SignUp} />
          <Route exact path="/" component={Login} />
          <ProtectedRoutes path="/allquestions" component={AllQuestions} />
          <ProtectedRoutes path="/profile" component={Profile} />
          <ProtectedRoutes path="/answered" component={Answered} />
          <ProtectedRoutes path="/unAnswered" component={UnAnswered} />
          <ProtectedRoutes path="/UserAsked" component={UserAsked} />
          <ProtectedRoutes path="/UserAnswered" component={UserAnswered} />
          <ProtectedRoutes path="/askquestion" component={AskQuestion} />
          <ProtectedRoutes exact path="/replypage/:id" component={ReplyPage} />
          <ProtectedRoutes
            exact
            path="/selectedquestionpage/:id"
            component={SelectedQuestionPage}
          />

          <ProtectedRoutes path="/aboutus" component={AboutUsPage} />
        </BrowserRouter>

      </div>
    </AuthProvider>
    </>
  );
}

export default App;
