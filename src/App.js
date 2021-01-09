import React, {useState} from 'react';
import './App.css';
//import Header from './components/header/Header';
//import Footer from './components/footer/Footer'
//import Routes from './routes/index';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import SignUp from './pages/signup/Signup';
import Login from './pages/login/Login';
//import ReplyPage from './pages/replyPage/ReplyPage';
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
// import GoogleLogin from 'react-google-login';

import AboutUsPage from "./pages/aboutUs/AboutUsPage"
import { Profiler } from 'react/cjs/react.development';

function App () {
  //const [isAuth, setIsAuth] = useState(true);
  const responseGoogle = response => {
    console.log (response);
    console.log (response.profileObj);
  };

  return (
    <>
    <AuthProvider>
{/* 
      <GoogleLogin
  clientId="459290032975-jej2ta4pqnes745j8nhohti5qpbifqfn.apps.googleusercontent.com"
  buttonText="Login"
  onSuccess={responseGoogle}
  onFailure={responseGoogle}
  cookiePolicy={'single_host_origin'}
/> */}
      <div className="App">
        {/* <Header />
          <Routes />
          <Footer /> */}

        <BrowserRouter>
          <Route path="/signup" component={SignUp} />

          <Route exact path="/" component={Login} />
          {/* <Route path="/replypage" component={ReplyPage} /> */}
          {/* <Route path="/selectedquestionpage" component={SelectedQuestionPage} /> */}
          <ProtectedRoutes path="/allquestions" component={AllQuestions} />
          <ProtectedRoutes path="/profile" component={Profile} />
          <ProtectedRoutes path="/answered" component={Answered} />
          <ProtectedRoutes path="/unAnswered" component={UnAnswered} />
          <ProtectedRoutes path="/UserAsked" component={UserAsked} />
          <ProtectedRoutes path="/UserAnswered" component={UserAnswered} />
          <ProtectedRoutes path="/askquestion" component={AskQuestion} />
          <ProtectedRoutes path="/profile" component={Profiler} />;

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
