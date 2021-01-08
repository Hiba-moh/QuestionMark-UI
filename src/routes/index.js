import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import SignUp from '../pages/signup/Signup';
import Login from '../pages/login/Login';
import AllQuestions from '../pages/allquestions/AllQuestions';
import Answered from '../pages/answered/Answered';
import UnAnswered from '../pages/unanswered/UnAnswered';
import ReplyPage from '../pages/replyPage/ReplyPage';
import AskQuestion from '../pages/askquestion/AskQuestion';
import SelectedQuestionPage
  from '../pages/selectedQuestionPage/SelectedQuestionPage';
import UserAnswered from '../components/replyComponent/UserAnswered';
import UserAsked from '../components/replyComponent/UserAsked';
import Profile from '../components/ProfileComponent/Profile';

import AboutUsPage from "../pages/aboutUs/AboutUsPage"

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/allquestions" component={AllQuestions} />
        <Route path="/answered" component={Answered} />
        <Route path="/unAnswered" component={UnAnswered} />
        <Route path="/replypage/:id" component={ReplyPage} />
        <Route path="/userAnswered/" component={UserAnswered} />
        <Route path="/userAsked" component={UserAsked} />
        <Route path="/askquestion" component={AskQuestion} />
        <Route path="/askquestion" component={AskQuestion} />
        <Route
          path="/selectedquestionpage/:id"
          component={SelectedQuestionPage}
        />
        <Route path="/aboutus" component={AboutUsPage} />
      </BrowserRouter>
    </div>
  );
};
