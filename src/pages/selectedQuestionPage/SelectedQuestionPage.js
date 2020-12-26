import React, {useState, useEffect} from 'react';
import './SelectedQuestionPage.css';
import {Link} from 'react-router-dom';
import Header from '../../components/allQuestionsComponent/Header';
import countapi from 'countapi-js';
import LeftSideMenu from '../allquestions/LeftSideMenu';

function SelectedQuestionPage({match}) {
  const id = match.params.id;
  const [pageData_question, setPageData_question] = useState ({});
  const [pageData_answer, setPageData_answer] = useState ([]);

  useEffect (
    () => {
      fetch (
        `https://question-mark-api.herokuapp.com/selectedquestionpage/${id}`
      )
        .then (res => {
          console.log (res);
          if (!res.ok) {
            throw Error (res.status + ' _ ' + res.url);
          }
          return res.json ();
        })
        .then (data => {
          setPageData_question (data.question[0]);
          setPageData_answer (data.answer);
          console.log ('here is answers array', pageData_answer);
        })
        .catch (error => {
          console.error (error);
        });
    },
    [match]
  );

  // countapi.visits ().then (result => {
  //   console.log (result.value);
  // });

  return (
    <div>
      <Header />
      <div className="selected_containerH">

        <div className="selected_titleH">
          <h2>Title : {pageData_question.question_title}</h2>
        </div>

        <div className="selected_textareaH">
          <div className="sideMenueContainer">
            <LeftSideMenu />
          </div>
          <div className="selectedQuestionAndAnswers">
            <div className="askedBy-NoAnswers-Reply">

              <div id="q-title-answersNo">
                <div>Asked by: {pageData_question.name}</div>
                <div>Date: {pageData_question.question_date}</div>
                <div>NO.Answers: {pageData_question.answers} </div>

              </div>
              <div className="selected_reply_linkH">

                <Link to={`/replypage/${pageData_question.id}`}>Add reply</Link>
              </div>

            </div>
            <div id="q-descriptionH">
              <h3>The Question:</h3>
              <div>{pageData_question.question}</div>
            </div>

            <div id="q-answerH">
              <h3>The Answer: </h3>
              {pageData_answer.map (answer => (
                <div class="question1H">
                  {answer.answer}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedQuestionPage;
