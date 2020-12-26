import React from 'react';
import './ReplyPage.css';
import SidebarComponent
  from '../../components/sidebarComponent/SidebarComponent';
import Header from '../../components/allQuestionsComponent/Header';
import Footer from '../../components/footerComponent/Footer';
import {useState} from 'react/cjs/react.development';
import {mockComponent} from 'react-dom/test-utils';
import moment from 'moment';
import axios from 'axios';

function ReplyPage({match}) {
  const id = match.params.id;
  const [answer, SetAnswer] = useState ('');

  const onSubmit = async e => {
    e.preventDefault ();
    try {
      const data = {
        question_id: id,
        reply: answer,
        user_id: 1,
        date: moment ().format ('DD/MM/YYYY'),
      };
      axios
        .post (`https://question-mark-api.herokuapp.com/replypage`, data)
        .then (response => console.log (response))
        .catch (error => console.log (error));
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
          <h2>Reply to question ....</h2>
          <form id="ReplyForm" onSubmit={onSubmit}>
            <label for="QuestionReply">Add your reply here ...</label>

            <textarea
              id="QReply"
              name="Qreply"
              rows="10"
              cols="150"
              value={answer}
              onChange={e => SetAnswer (e.target.value)}
            />
            <input id="ReplySubmitbtn" type="submit" value="reply" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ReplyPage;
