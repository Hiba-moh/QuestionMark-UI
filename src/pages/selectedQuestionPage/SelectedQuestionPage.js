import React, {useState, useEffect} from 'react';
import './SelectedQuestionPage.css';
import {Link, withRouter, useHistory} from 'react-router-dom';
import Header from '../../components/allQuestionsComponent/Header';
import LeftSideMenu from '../allquestions/LeftSideMenu';
import ReactHtmlParse from 'react-html-parser';
import {addLanguage, highlight} from 'illuminate-js';
import {javascript} from 'illuminate-js/lib/languages';
import pdf from '../../components/allQuestionsComponent/download.png';
import jsPDF from 'jspdf';
import '../../components/footerComponent/Footer';
import Footer from '../../components/footerComponent/Footer';
import FormDialog
  from '..//..//components/selectedQuestionPageComponents/FormDialog';
import CommentsForm
  from '..//..//components/selectedQuestionPageComponents/CommentsForm';

function SelectedQuestionPage({match}) {
  const id = match.params.id;
  const [pageData_question, setPageData_question] = useState ({});
  const [pageData_answer, setPageData_answer] = useState ([]);
  const [updatedViews, SetUpdatedViews] = useState (0);
  const [comments, setComments] = useState ([]);
  // const [filteredComments, setFilteredComments] = useState ([]);
  let filteredComments = [];
  const history = useHistory ();

  addLanguage ('javascript', javascript);
  addLanguage ('js', javascript);

  // axios.post (
  //   `https://question-mark-api.herokuapp.com/comments`,
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

  useEffect (async () => {
    await fetch (`https://question-mark-api.herokuapp.com/comments`)
      .then (res => {
        if (!res.ok) {
          throw Error (res.status + ' _ ' + res.url);
        }
        return res.json ();
      })
      .then (data => {
        setComments (data);
      })
      .catch (error => {
        console.error (error);
      });
  }, []);

  useEffect (
    async () => {
      await fetch (
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
          // SetUpdatedViews (data.question[0].views);
        })
        .catch (error => {
          console.error (error);
        });
    },
    [match]
  );

  try {
    const data4 = {
      id: id,
      views: pageData_question.views + 1,
    };
    const response = fetch (`https://question-mark-api.herokuapp.com/views`, {
      method: 'PUT',
      body: JSON.stringify (data4),
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
    });
  } catch (err) {
    console.error (err);
  }

  const jsPDFGenerator = e => {
    e.preventDefault ();
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
    doc.setFont ('courier');
    doc.save ('AllQuestions');
    return false;
  };

  if (!comments) {
    return null;
  } else {
    console.log ('comments', comments);
    return (
      <div>
        <Header />
        <div className="selected_containerH">

          <div className="selected_titleH">
            <h4>Title : {pageData_question.question_title}</h4>
          </div>

          <div className="selected_textareaH">
            <div className="sideMenueContainer">
              <a href="" onClick={e => jsPDFGenerator (e)}>
                <img id="selected-question-pdf" src={pdf} />
              </a>
              <LeftSideMenu />
            </div>
            <div className="selectedQuestionAndAnswers">
              <div className="askedBy-NoAnswers-Reply">

                <div id="q-title-answersNo">
                  <div>Date: {pageData_question.question_date}</div>
                  <div>NO.Answers: {pageData_question.answers} </div>
                  <div>Likes: {pageData_question.rate}</div>
                  <div>Views: {pageData_question.views}</div>

                </div>
                <div className="selected_reply_linkH">

                  <Link to={`/replypage/${pageData_question.id}`}>
                    Add reply
                  </Link>
                </div>

              </div>
              <div id="q-descriptionH">
                <h3>The Question:</h3>
                <div>{pageData_question.question}</div>
                <h6>Asked by: {pageData_question.name}</h6>
              </div>

              <CommentsForm />

              {/* 
              {pageData_question.answers > 0 &&
                <div id="q-answerH">
                  <h3>The Answers: </h3>
                  {pageData_answer.map ((answer, index) => (
                    <div key={index} className="answer-details">
                      <div id="pAnswers"> {ReactHtmlParse (answer.answer)}</div>
                      <h6>{answer.answer_date}</h6>
                      <h6>Answered by: {answer.name}</h6>
                      <hr id="hrBreak" />
                      <div>

                        {comments.map (comment => <h6>{comment.comment}</h6>)}
                        {
                          (filteredComments = comments.filter (comment => {
                            answer.id == comment.answer_id;
                          }))
                        }
                        {filteredComments.map (comment => (
                          <div className="oneComment">
                            <h4>{comment.comment}</h4>
                            <h6>{comment.comment_date}</h6>
                          </div>
                        ))}

                      </div>
                      <FormDialog answer={answer} />
                    </div>
                  ))}
                </div>} */}

            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default withRouter (SelectedQuestionPage);
