import React, {useState, useEffect} from 'react';
import './SelectedQuestionPage.css';
import {Link, withRouter} from 'react-router-dom';
import Header from '../../components/allQuestionsComponent/Header';
import countapi from 'countapi-js';
import LeftSideMenu from '../allquestions/LeftSideMenu';
import loginImg from '../../assets/images/login.png';
import ReactHtmlParse from 'react-html-parser';
import {addLanguage, highlight} from 'illuminate-js';
import {javascript} from 'illuminate-js/lib/languages';
import pdf from '../../components/allQuestionsComponent/download.png';
import jsPDF from 'jspdf';

function SelectedQuestionPage({match}) {
  const id = match.params.id;
  const [pageData_question, setPageData_question] = useState ({});
  const [pageData_answer, setPageData_answer] = useState ([]);

  addLanguage ('javascript', javascript);
  addLanguage ('js', javascript);

  useEffect (
    () => {
      fetch (
        `https://question-mark-api.herokuapp.com/selectedquestionpage/${id}`
      )
        .then (res => {
          if (!res.ok) {
            throw Error (res.status + ' _ ' + res.url);
          }
          return res.json ();
        })
        .then (data => {
          setPageData_question (data.question[0]);
          setPageData_answer (data.answer);
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

  const jsPDFGenerator = () => {
    var doc = new jsPDF ('L', 'pt');
    doc.text (120, 30, 'Question:');
    doc.text (
      30,
      60,
      pageData_question.question + '\n' + pageData_question.answer
    );

    doc.addPage ();
    doc.text (120, 30, 'Answers:');
    for (let i = 0; i < pageData_answer.length; i++) {
      doc.text (30, 60, pageData_answer[i].answer);
      doc.addPage ();
    }

    doc.save ('AllQuestions');
    doc.setFont ('courier');
  };

  return (
    <div>
      <Header />
      <div className="selected_containerH">

        <div className="selected_titleH">
          <h4>Title : {pageData_question.question_title}</h4>
        </div>

        <div className="selected_textareaH">
          <div className="sideMenueContainer">
            <LeftSideMenu />
          </div>
          <div className="selectedQuestionAndAnswers">
            <div className="askedBy-NoAnswers-Reply">

              <a href="" onClick={jsPDFGenerator}>
                <img id="selected-question-pdf" src={pdf} />
              </a>

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
            {pageData_question.answers > 0 &&
              <div id="q-answerH">
                <h3>The Answers: </h3>
                {pageData_answer.map ((answer, index) => (
                  <div key={index} className="answer-details">
                    <div id="pAnswers"> {ReactHtmlParse (answer.answer)}</div>
                    <h6>{answer.answer_date}</h6>
                    <h6>answered by: {answer.name}</h6>
                    <hr id="hrBreak" />
                  </div>
                ))}
              </div>}
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter (SelectedQuestionPage);
