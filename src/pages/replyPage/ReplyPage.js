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
import {withRouter, useHistory} from 'react-router-dom';
import {AuthContext} from '../../AuthContext';
import ReactFile from '../../components/ProfileComponent/ReactFile';
import SQL from '../../components/ProfileComponent/SQL';
import Js from '../../components/ProfileComponent/JS';
import HTML from '../../components/ProfileComponent/HTML';

function ReplyPage({match}) {
  const id = match.params.id;
  const [answer, SetAnswer] = useState ('');
  const [questionReply, SetQuestionReply] = useState ('');
  //const [isAuth, setIsAuth] = useContext(AuthContext);
  const {isAuth, greet, idNumber} = useContext (AuthContext);
  const [isAuthValue, setIsAuthValue] = isAuth;
  const [greetValue, setGreetValue] = greet;
  const [idNumberValue, setIdNumberValue] = idNumber;
  const history = useHistory ();

  useEffect (() => {
    fetch (`https://question-mark-api.herokuapp.com/selectedquestionpage/${id}`)
      .then (response => response.json ())
      .then (data => SetQuestionReply (data.question[0]))
      .catch (error => console.log (error));
  }, []);
  console.log(`Email: ${questionReply.email}`);
  console.log(`Name: ${questionReply.name}`);

  const emailData = {
    send: true,
    email: questionReply.email,
    name: questionReply.name
  }

  async function handleEmail() {
    axios.post('https://question-mark-api.herokuapp.com/sendmail',
     JSON.stringify(emailData),
     {
      withCredentials: false,
      transformRequest: [
        (data, headers) => {
          delete headers.post['Content-Type'];
          return data;
        },
      ],
    }
   );
   

  };

  const data1 = {
    channel: '#questionmark_forum',
    attachments: [
      {
        color: 'danger',
        fields: [
          {
            title: 'Question No.5007 username: @user Topic: TESTING123',
            value: 'Your question has a reply. Please sign in to the question forum to check your answer.',
            short: false,
          },
        ],
      },
    ],
  };

  async function handleSlackMessage () {
    let res = await axios.post (
      process.env.REACT_APP_API_KEY,
      JSON.stringify (data1),
      {
        withCredentials: false,
        transformRequest: [
          (data, headers) => {
            delete headers.post['Content-Type'];
            return data;
          },
        ],
      }
    );
    res.status === 200
      ? alert (`Thank you for your contribution`)
      : alert ('Error sending message');
  }

  const onSubmitForm = e => {
    e.preventDefault ();

    const data = {
      question_id: id,
      reply: answer,
      user_id: 1,
      date: moment ().format ('YYYY/MM/DD'),
    };

    fetch ('https://question-mark-api.herokuapp.com/replypage', {
      method: 'POST',
      body: JSON.stringify (data),
      mode: 'cors',
      // cache: 'no-cache',
      headers: {'Content-Type': 'application/json'},
    })
      .then (response => {
        return response.json ();
      })
      .then (data => {
        console.log (data.answer);
        if (data.answer) {
          handleEmail();
          handleSlackMessage ();
          history.push (`/selectedquestionpage/${id}`);
        } else {
          alert ('Oops, something went wrong!');
          history.push ('/allquestions');
        }
      })
      .catch (err => {
        console.error (err);
      });
  };

  // const onSubmitForm = async e => {
  //   // e.preventDefault ();
  //   try {
  //     const data = {
  //       question_id: id,
  //       reply: answer,
  //       user_id: 1,
  //       date: moment ().format ('YYYY/MM/DD'),
  //     };

  //     const response = await fetch (
  //       'https://question-mark-api.herokuapp.com/replypage',
  //       {
  //         method: 'POST',
  //         body: JSON.stringify (data),
  //         mode: 'cors',
  //         // cache: 'no-cache',
  //         headers: {'Content-Type': 'application/json'},
  //       }
  //     );
  //     response.status == 200 ? (handleSlackMessage()) : (alert('error'));
  //    // console.log ('ReplyPage-Post-Response: ', response);
  //   } catch (err) {
  //     console.error (err);
  //   }
  // };

  const renderRepl = subject => {
    switch (subject) {
      case 1:
        return '';
      case 2:
        return <HTML />;
        break;
      case 3:
        return <Js />;
        break;
      case 4:
        return <ReactFile />;
        break;
      case 5:
        return <Node />;
        break;
      case 6:
        return <SQL />;
        break;
      case 7:
        return '';
      default:
        return '';
    }
  };

  return (
    <div className="ReplyPageContainer">
      <Header />
      <div className="reply-container">
        {/* <SidebarComponent /> */}
        <div id="runTime">
          {renderRepl (questionReply.module_id)}

        </div>
        <div className="replyBody">
          <h2>
            Reply to the question:
            {' '}
            <div>
              {' '}
              <h4>
                <small className="text-muted">{questionReply.question}</small>
              </h4>
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
