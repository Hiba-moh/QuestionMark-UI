import React, {useState} from 'react';
import './App.css';
//import Header from './components/header/Header';
//import Footer from './components/footer/Footer'
//import Routes from './routes/index';
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

function App () {
  //const [isAuth, setIsAuth] = useState(true);

  return (
    <AuthProvider>
      <div className="App">
        {/* <Header />
          <Routes />
          <Footer /> */}

          
           
            <BrowserRouter>
                <Route path="/signup" component={SignUp} />
                
                <Route path="/login" component={Login} />
                {/* <Route path="/replypage" component={ReplyPage} /> */}
                {/* <Route path="/selectedquestionpage" component={SelectedQuestionPage} /> */}
                <ProtectedRoutes path="/allquestions" component={AllQuestions} />
                <ProtectedRoutes path="/answered" component={Answered} />
                <ProtectedRoutes path="/unAnswered" component={UnAnswered}  />
                <ProtectedRoutes path="/askquestion" component={AskQuestion} />  
                <ProtectedRoutes path="/replypage" component={ReplyPage} />
                <Route exact path="/selectedquestionpage/:id" component={SelectedQuestionPage} />
            
            </BrowserRouter>



        <BrowserRouter>
          <Route path="/signup" component={SignUp} />

          <Route path="/login" component={Login} />
          {/* <Route path="/replypage" component={ReplyPage} /> */}
          {/* <Route path="/selectedquestionpage" component={SelectedQuestionPage} /> */}
          <ProtectedRoutes path="/allquestions" component={AllQuestions} />
          <ProtectedRoutes path="/answered" component={Answered} />
          <ProtectedRoutes path="/unAnswered" component={UnAnswered} />
          <ProtectedRoutes path="/UserAsked" component={UserAsked} />;
          <ProtectedRoutes path="/UserAnswered" component={UserAnswered} />;
          <ProtectedRoutes path="/askquestion" component={AskQuestion} />
          <Route exact path="/replypage/:id" component={ReplyPage} />
          <Route
            exact
            path="/selectedquestionpage/:id"
            component={SelectedQuestionPage}
          />

        </BrowserRouter>

      </div>
    </AuthProvider>
  );
}

export default App;
