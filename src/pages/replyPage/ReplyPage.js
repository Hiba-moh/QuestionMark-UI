import React, {useEffect} from 'react';
import './ReplyPage.css';
import SidebarComponent
  from '../../components/sidebarComponent/SidebarComponent';
import Header from '../../components/allQuestionsComponent/Header';
import Footer from '../../components/footerComponent/Footer';
import {useState} from 'react/cjs/react.development';
import {mockComponent} from 'react-dom/test-utils';
import moment from 'moment';
import axios from 'axios';
import '../../components/replyComponent/UserAnswered';
import '../../components/replyComponent/UserAsked';
function ReplyPage({match}) {
  const id = match.params.id;
  const [answer, SetAnswer] = useState ('');
  const [questionReply, SetQuestionReply] = useState ('');
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
      // axios.post (
      //   `https://question-mark-api.herokuapp.com/replypage`,
      //   JSON.stringify (data),
      //   {
      //     withCredentials: false,
      //     transformRequest: [
      //       (data, headers) => {
      //         delete headers.post['Content-Type'];
      //         return data;
      //       },
      //     ],
      //   }
      // );
      console.log (data);
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
      console.log (response);
    } catch (err) {
      console.error (err);
    }
  };
  // const questionToReply = async id => {
  //   const res = await fetch`https://question-mark-api.herokuapp.com//selectedquestionpage/${id}`;
  //   const resObj = await res.json ();
  //   console.log ('question to reply = ', resObj.question[0].question);
  //   SetQuestionReply (resObj.question.question[0].question);
  // };
  // useEffect (() => {
  //   questionToReply (id);
  // }, []);
  return (
    <div className="ReplyPageContainer">
      <Header />
      <div className="reply-container">
        <SidebarComponent />
        <div className="replyBody">
          <h2>
            Reply to the question:
            {' '}
            <h4><small class="text-muted">{questionReply}</small></h4>
          </h2>
          <form id="ReplyForm" onSubmit={onSubmitForm}>
            <label for="QuestionReply">Add your reply here ...</label>
            <textarea
              id="QReply"
              name="Qreply"
              rows="10"
              cols="150"
              value={answer}
              onChange={e => SetAnswer (e.target.value)}
            />
            <input id="ReplySubmitbtn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ReplyPage;