import React, {useState, useEffect, useContext} from 'react';
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
import {AuthContext} from '../../AuthContext';
import RateComponent
  from '../../components/allQuestionsComponent/RateComponent';

function SelectedQuestionPage({match}) {
  const id = match.params.id;
  const {isAuth, greet, idNumber} = useContext (AuthContext);
  const [isAuthValue, setIsAuthValue] = isAuth;
  const [greetValue, setGreetValue] = greet;
  const [idNumberValue, setIdNumberValue] = idNumber;

  const [pageData_question, setPageData_question] = useState ({});
  const [pageData_answer, setPageData_answer] = useState ([]);
  const [updatedViews, SetUpdatedViews] = useState (0);
  const [comments, setComments] = useState ([]);
  const [txtValue, setTxtValue] = useState ('');
  const [open, setOpen] = React.useState (false);
  const [flag, setFlag] = useState (false);

  if (idNumber[0]) {
    localStorage.setItem ('idValue', idNumber[0]);
  }

  let filteredComments = [];
  const history = useHistory ();

  addLanguage ('javascript', javascript);
  addLanguage ('js', javascript);

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
        })
        .catch (error => {
          console.error (error);
        });
    },
    [match]
  );

  useEffect (
    async () => {
      await fetch (`https://question-mark-api.herokuapp.com/comments`)
        .then (res => {
          if (!res.ok) {
            throw Error (res.status + ' _ ' + res.url);
          }
          return res.json ();
        })
        .then (data => setComments (data))
        .catch (error => {
          console.error (error);
        });
    },
    [flag]
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

  const handlePostSubmit = async (answer, e) => {
    e.preventDefault ();
    const date = Date.now ();
    const data = {
      answer_id: answer.id,
      question_id: answer.question_id,
      comment: txtValue,
      users_id: localStorage.getItem ('idValue'),
      date: new Intl.DateTimeFormat ('en-GB', {
        dateStyle: 'full',
        timeStyle: 'long',
      }).format (date),
    };

    await fetch ('https://question-mark-api.herokuapp.com/comments', {
      method: 'POST',
      body: JSON.stringify (data),
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
    })
      .then (response => {
        return response.json ();
      })
      .then (data => {
        e.target.value = ' ';
      })
      .catch (err => {
        console.error (err);
      });
    setTxtValue ('');
    setFlag (!flag);
  };

  if (!comments) {
    return null;
  } else {
    return (
      <div>
        <Header />
        <div className="selected_containerH">

          <div className="selected_titleH">
            <h4>Title : {pageData_question.question_title}</h4>
          </div>

          <div className="selected_textareaH">

            <div className="sideMenueContainer">
              <div id="leftMenu">
                <a href="" onClick={e => jsPDFGenerator (e)}>
                  <img id="selected-question-pdf" src={pdf} />
                </a>
                <div class="leftLinksOnly">
                  <LeftSideMenu />
                </div>
              </div>

            </div>
            <div className="selectedQuestionAndAnswers">
              <div className="selectedQuestionresponsiveLinks">
                <button
                  className="btn btn-danger"
                  style={{width: '14rem', margin: '3rem 0 0 0'}}
                  onClick={() => (window.location = '/answered')}
                >
                  ANSWERED QUESTIONS
                </button>
                <button
                  className="btn btn-danger"
                  style={{width: '14rem', margin: '3rem 0 0 0'}}
                  onClick={() => (window.location = '/unanswered')}
                >
                  UNANSWERED QUESTIONS
                </button>
              </div>

              <div className="askedBy-NoAnswers-Reply">

                <div id="q-title-answersNo">
                  <div>Date: {pageData_question.question_date}</div>
                  <div>NO.Answers: {pageData_question.answers} </div>
                  <div>Likes: {pageData_question.rate}</div>
                  <div>Views: {pageData_question.views}</div>

                </div>
                {/* rate here */}
                {/* <RateComponent keyId={id} rate={pageData_question.rate} /> */}

                <div className="selected_reply_linkH">

                  <Link to={`/replypage/${pageData_question.id}`}>
                    Add reply
                  </Link>
                </div>

              </div>
              <div id="q-descriptionH">
                <h2>The Question:</h2>
                <h3>{pageData_question.question}</h3>
                <h6>Asked by: {pageData_question.name}</h6>
              </div>

              {pageData_question.answers > 0 &&
                <div class="container">
                  <h2 class="text-left">
                    Answers :
                  </h2>
                  {pageData_answer.map ((answer, index) => (
                    <div class="card answer_card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-2">
                            <img
                              src="https://image.ibb.co/jw55Ex/def_face.jpg"
                              class="img img-rounded img-fluid"
                            />
                            <h4 class="text-secondary text-center">
                              {answer.answer_date}
                            </h4>
                          </div>
                          <div class="col-md-10">
                            <p>
                              <h4>{answer.name}</h4>
                              {/* <span class="float-right">
                                <i class="text-warning fa fa-star" />
                              </span>
                              <span class="float-right">
                                <i class="text-warning fa fa-star" />
                              </span>
                              <span class="float-right">
                                <i class="text-warning fa fa-star" />
                              </span>
                              <span class="float-right">
                                <i class="text-warning fa fa-star" />
                              </span> */}

                            </p>
                            <div class="clearfix" />
                            <h3>
                              {ReactHtmlParse (answer.answer)}
                            </h3>

                          </div>
                        </div>

                        <div class="col-md-6 comments-section">
                          <div class="row">
                            <div class="col-12">
                              <h3>Comment</h3>
                              <form
                                class="comment-form"
                                onSubmit={e => {
                                  handlePostSubmit (answer, e);
                                }}
                              >
                                <textarea
                                  class="comment-area"
                                  name="user_comment"
                                  placeholder="Write your comment here"
                                  cols="100"
                                  rows="8"
                                  value={txtValue}
                                  onChange={e => setTxtValue (e.target.value)}
                                />
                                <button
                                  type="submit"
                                  class="btn  comment-btn btn-danger"
                                >
                                  Post
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>

                        {comments.map (comment => (
                          <div class="card card-inner commentCard">
                            <div class="card-body">
                              <div class="row">
                                <div class="col-md-2">
                                  <img
                                    src="https://image.ibb.co/jw55Ex/def_face.jpg"
                                    class="img img-rounded img-fluid"
                                  />
                                  <p class="text-secondary text-center">
                                    {comment.comment_date}
                                  </p>
                                </div>
                                <div class="col-md-10">
                                  <p>
                                    <h3>{greet}</h3>
                                  </p>
                                  <p>
                                    {comment.comment}
                                  </p>

                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default withRouter (SelectedQuestionPage);
