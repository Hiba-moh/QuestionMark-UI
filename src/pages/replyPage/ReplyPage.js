import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import './ReplyPage.css';
import TextEditor from '../../components/replyComponent/TextEditor';
import Header from '../../components/allQuestionsComponent/Header';
import Footer from '../../components/footerComponent/Footer';
import moment from 'moment';

import '../../components/replyComponent/UserAnswered';
import '../../components/replyComponent/UserAsked';
import {withRouter, useHistory} from 'react-router-dom';
import {AuthContext} from '../../AuthContext';
import ReactFile from '../../components/ProfileComponent/ReactFile';
import SQL from '../../components/ProfileComponent/SQL';
import Js from '../../components/ProfileComponent/JS';
import HTML from '../../components/ProfileComponent/HTML';
import Node from '../../components/ProfileComponent/Node';

function ReplyPage({match}) {
  const id = match.params.id;
  const [answer, SetAnswer] = useState ('');
  const [questionReply, SetQuestionReply] = useState ('');
  const {isAuth, greet, idNumber} = useContext (AuthContext);
  const [isAuthValue, setIsAuthValue] = isAuth;
  const [greetValue, setGreetValue] = greet;
  const [idNumberValue, setIdNumberValue] = idNumber;
  const history = useHistory ();

  if (idNumber[0]) {
    localStorage.setItem ('replyVal', idNumber[0]);
  }

  const Module_name = subject_id => {
    switch (subject_id) {
      case 1:
        return 'git';
      case 2:
        return 'HTML/CSS';
        break;
      case 3:
        return 'JavaScript';
        break;
      case 4:
        return 'React';
        break;
      case 5:
        return 'NodeJs';
        break;
      case 6:
        return 'SQL';
        break;
      case 7:
        return 'MangoDB';
      default:
        return '';
    }
  };

  useEffect (() => {
    fetch (`https://question-mark-api.herokuapp.com/selectedquestionpage/${id}`)
      .then (response => response.json ())
      .then (data => SetQuestionReply (data.question[0]))
      .catch (error => console.log (error));
  }, []);

  const emailData = {
    send: true,
    email: questionReply.email,
    name: questionReply.name,
    text: `Hi ${questionReply.name}, your question has been answered. Please login into the questionmark forum to check your answer.`,
  };

  async function handleEmail () {
    fetch ('https://question-mark-api.herokuapp.com/sendmail', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify (emailData),
    })
      .then (response => {
        return response.json ();
      })
      .catch (err => {
        console.error (err);
      });
  }

  const data1 = {
    channel: '#questionmark_forum',
    attachments: [
      {
        color: 'danger',
        fields: [
          {
            title: `Question No.${questionReply.id} Username: ${questionReply.name} Module: ${Module_name (questionReply.module_id)}`,
            value: `Hi ${questionReply.name}, your question has a reply. Please sign in to the question forum to check your answer. An email notification has also been sent to ${questionReply.email}`,
            short: false,
          },
        ],
      },
    ],
  };


  // const option = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(data1)

  // }

  // const handleSlackMessage = async () => {
  //  let res=  await fetch(process.env.REACT_APP_API_KEY, option)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(object)
  //   }).catch(err => {
  //     console.error(err);
  //   })

    
  // }

  async function handleSlackMessage () {
    let res = await axios.post (
      process.env.API_KEY,
      [JSON.stringify (data1)],
      {
        withCredentials: false,
        transformRequest: [
          (data, headers) => {
            delete headers.post['Content-Type'];
            return data;
          },
        ],
      }
    ).then(response => {
      console.log(response);
      return response.json();
    });
    res.status === 200
      ?  alert (`Thank you for your contribution 🌹`)
      : alert ('Error sending message');
  }

  const onSubmitForm = e => {
    e.preventDefault ();

    const data = {
      question_id: id,
      reply: answer,
      user_id: localStorage.getItem ('replyVal'),
      date: moment ().format ('YYYY/MM/DD'),
    };

    fetch ('https://question-mark-api.herokuapp.com/replypage', {
      method: 'POST',
      body: JSON.stringify (data),
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
    })
      .then (response => {
        return response.json ();
      })
      .then (data => {
        //console.log (data.answer);
        if (data.answer) {
          handleSlackMessage ();
          handleEmail ();
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
            <input id="ReplySubmitbtn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter (ReplyPage);
