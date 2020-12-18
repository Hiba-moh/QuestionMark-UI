import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import SignUp from '../pages/signup/Signup';
import Login from '../pages/login/Login';
import AllQuestions from '../pages/allquestions/AllQuestions';
import Answered from '../pages/answered/Answered';
import UnAnswered from '../pages/unanswered/UnAnswered';
import ReplyPage from '../pages/replyPage/ReplyPage';
import AskQuestion from '../pages/askquestion/AskQuestion'
import SelectedQuestionPage from '../pages/selectedQuestionPage/SelectedQuestionPage';
import Overview from '../pages/overview/Overview'


export default () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/allquestions" component={AllQuestions} />
        <Route path="/answered" component={Answered} />
        <Route path="/unAnswered" component={UnAnswered} />
        <Route path="/replypage" component={ReplyPage} />
        <Route path="/askquestion" component={AskQuestion} />
        <Route path="/selectedquestionpage" component={SelectedQuestionPage} />
        <Route path="/overview" component={Overview} />


      </BrowserRouter>
    </div>
  );
};
