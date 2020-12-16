import React, {useState, useEffect} from 'react';
import TextareaComponent
  from '../../components/textareaComponent/TextareaComponent';
import './SelectedQuestionPage.css';
import {Link} from 'react-router-dom';
import ButtonComponent from '../../components/buttonComponent/ButtonComponent';

function SelectedQuestionPage({match}) {
  const {id} = match.params.id;
  const [pageData, setPageData] = useState ([]);
  useEffect (() => {
    fetch (`https://api-test111.herokuapp.com/selectedquestionpage/${id}`)
      .then (res => {
        console.log (res);
        if (!res.ok) {
          throw Error (res.status + ' _ ' + res.url);
        }
        return res.json ();
      })
      .then (data => {
        setPageData (data[0]);
        console.log (data);
      })
      .catch (error => {
        console.error (error);
      });
  }, []);

  return (
    <div className="selected_container">
      <div className="selected_titleandbtn">
        <div className="selected_title">
          <h2>{pageData.question_title}</h2>
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
          subtitle="username"
          description="Question details here..."
        />

      </div>

    </div>
  );
}

export default SelectedQuestionPage;
