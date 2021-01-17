import React, {useEffect, useContext, useState} from 'react';
import '../ProfileComponent/Profile.css';
import SidebarComponent
  from '../../components/sidebarComponent/SidebarComponent';
import TextEditor from '../../components/replyComponent/TextEditor';
import Header from '../../components/allQuestionsComponent/Header';
import Footer from '../../components/footerComponent/Footer';

import {mockComponent} from 'react-dom/test-utils';
import moment from 'moment';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../../components/replyComponent/UserAnswered';
import '../../components/replyComponent/UserAsked';
import {withRouter, useHistory} from 'react-router-dom';
import {AuthContext} from '../../AuthContext';

function Profile () {
  //const [isAuth, setIsAuth] = useContext(AuthContext);
  const {isAuth, greet, idNumber} = useContext (AuthContext);
  const [isAuthValue, setIsAuthValue] = isAuth;
  const [greetValue, setGreetValue] = greet;
  const [idNumberValue, setIdNumberValue] = idNumber;
  const history = useHistory ();

  return (
    <div className="profilePageContainer">
      <Header />
      <div className="profile-container">
        <SidebarComponent />
        <div className="profileBody">
          <div id="profileChoicesContainer">

            <Link to="/userAnswered">
              <div className="profileChoices"><h4>ANSWERS</h4></div>
            </Link>
            <Link to="/userAsked">
              <div className="profileChoices"><h4>QUESTIONS</h4></div>
            </Link>
            <div className="profileChoices"><h4>ACCOUNT</h4></div>
            <div className="profileChoices"><h4>LIKES</h4></div>
          </div>
          <div id="right-side" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter (Profile);
