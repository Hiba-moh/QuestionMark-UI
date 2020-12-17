import React, {useState, useEffect} from 'react';
import TextareaComponent
  from '../../components/textareaComponent/TextareaComponent';
import './SelectedQuestionPage.css';
import {Link} from 'react-router-dom';
import ButtonComponent from '../../components/buttonComponent/ButtonComponent';

function SelectedQuestionPage({match}) {
  const id = match.params.id;
  const [pageData_question, setPageData_question] = useState ([]);
  const [pageData_answer, setPageData_answer] = useState ([]);

  useEffect (
    () => {
      fetch (`https://api-test111.herokuapp.com/selectedquestionpage/${id}`)
        .then (res => {
          console.log (res);
          if (!res.ok) {
            throw Error (res.status + ' _ ' + res.url);
          }
          return res.json ();
        })
        .then (data => {
          setPageData_question (data.question[0]);
          setPageData_answer (data.answer[0]);
        })
        .catch (error => {
          console.error (error);
        });
    },
    [match]
  );

  const isThereAnswers = () => {
    if (pageData_question.answered > 0) {
      for (let i = 0; i < pageData_answer.length; i++) {
        console.log (pageData_answer[i]);
        return <h3>{pageData_answer[i].answer}</h3>;
      }
    } else return '';
  };

  return (
    <div className="selected_container">
      <div className="selected_titleandbtn">
        <div className="selected_title">
          <h2>Title : {pageData_question.question_title}</h2>
        </div>
        <div className="selected_title_btn">
          <ButtonComponent label="Ask question" />
        </div>
      </div>
      <div className="selected_link">
        <p><Link to="/replypage">Add reply</Link></p>
      </div>
      <div className="selected_textarea">
        <TextareaComponent
          subtitle={
            'ASKED BY : ' +
              pageData_question.name +
              ' ' +
              `\n ` +
              ' | ' +
              pageData_question.answered +
              ' Answers'
          }
          description={
            `Date question posted : ` +
              pageData_question.question_date +
              `\n \nQuestion : ` +
              pageData_question.question
            // isThereAnswers ()
            // <div>{pageData_answer.answer} </div>
          }
        />

      </div>

    </div>
  );
}

export default SelectedQuestionPage;
