import React, {useEffect} from 'react';
import './ReplyPage.css';
import SidebarComponent
  from '../../components/sidebarComponent/SidebarComponent';
import TextEditor from '../../components/replyComponent/TextEditor';
import Header from '../../components/allQuestionsComponent/Header';
import Footer from '../../components/footerComponent/Footer';
import {useState, useContext} from 'react/cjs/react.development';
import {mockComponent} from 'react-dom/test-utils';
import moment from 'moment';
import axios from 'axios';
import '../../components/replyComponent/UserAnswered';
import '../../components/replyComponent/UserAsked';
import {withRouter} from 'react-router-dom';
import {AuthContext} from '../../AuthContext';

function ReplyPage({match}) {
  const id = match.params.id;
  const [answer, SetAnswer] = useState ('');
  const [questionReply, SetQuestionReply] = useState ('');
  //const [isAuth, setIsAuth] = useContext(AuthContext);
  const {isAuth, greet, idNumber} = useContext (AuthContext);
  const [isAuthValue, setIsAuthValue] = isAuth;
  const [greetValue, setGreetValue] = greet;
  const [idNumberValue, setIdNumberValue] = idNumber;

  const questionToReplyById = axios
    .get (`https://question-mark-api.herokuapp.com/selectedquestionpage/${id}`)
    .then (response => SetQuestionReply (response.data.question[0].question))
    .catch (error => console.log (error));

  const onSubmitForm = async e => {
    // e.preventDefault ();
    try {
      const data = {
        question_id: id,
        reply: answer,
        user_id: 1,
        date: moment ().format ('YYYY/MM/DD'),
      };

      const response = await fetch (
        'https://question-mark-api.herokuapp.com/replypage',
        {
          method: 'POST',
          body: JSON.stringify (data),
          mode: 'cors',
          // cache: 'no-cache',
          headers: {'Content-Type': 'application/json'},
        }
      );
      console.log ('ReplyPage-Post-Response: ', response);
    } catch (err) {
      console.error (err);
    }
  };

  return (
    <div className="ReplyPageContainer">
      <Header />
      <div className="reply-container">
        <SidebarComponent />
        <div className="replyBody">
          <h2>
            Reply to the question:
            {' '}
            <div>
              {' '}
              <h4><small className="text-muted">{questionReply}</small></h4>
            </div>
          </h2>
          <form id="ReplyForm" onSubmit={onSubmitForm}>
            <label htmlFor="QuestionReply">Add your reply here ...</label>

            <TextEditor SetAnswer={SetAnswer} />

            {/* <textarea
              id="QReply"
              name="Qreply"
              rows="10"
              cols="150"
              value={answer}
              onChange={e => SetAnswer (e.target.value)}
            /> */}
            <input id="ReplySubmitbtn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter (ReplyPage);
