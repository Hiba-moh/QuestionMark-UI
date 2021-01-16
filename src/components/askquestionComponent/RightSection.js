import React, {useState} from 'react';
import {Editor} from '@tinymce/tinymce-react';


import {Link} from 'react-router-dom';
import './AskQuestionComponent.css';
import Modules from './Modules';
import ReactHtmlParse from 'react-html-parser'

function RightSection({userID,textAreaClass}) {
  // This is a state variable which will store the value selected from drop down menu and then it will be sent to post request.
  let [displayForm, setDisplayForm] = useState (true);

  let today = new Date ().toISOString ().slice (0, 10);

  let [formTitle, setFormTitle] = useState ('');
  let [formQues, setFormQues] = useState ('');
  let [formModule_id, setFormModule_id] = useState (1);
  let [formUsers_id, setFormUsers_id] = useState (userID);
  let [formQues_date, setFormQues_date] = useState (today);
  let [formAnswers, setFormAnswers] = useState (0);

  const detailsOfQues = {
    title: formTitle,
    question: formQues,
    module_id: formModule_id,
    users_id: formUsers_id,
    question_date: formQues_date,
    answers:formAnswers
  };


  const emailObject={
    send: true,
    email: "false",
    users_id:formUsers_id,
    text:"Your Question has been posted. Thank you for using the platform. You will receive a notification when someone will respond to your question"
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify (detailsOfQues),
  };


  const sendingEmail = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify (emailObject),
  };

  function askAnother () {
    setDisplayForm (true);
  }


  function sendEmail()
  {
    fetch("https://question-mark-api.herokuapp.com/sendmail",sendingEmail)
    // fetch("http://localhost:5000/sendmail",sendingEmail)
    .then(data=>data.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
  }

  //in this function I should update all the values and call the fetch to submit the data.
  function submitted (e) {
    e.preventDefault ();
    fetch ('https://question-mark-api.herokuapp.com/ask-question', options) // once the changes have been pushed use this fetch to send to heroku url
      // fetch("http://localhost:5000/ask-question",options)
      .then (data => data.json ())
      .then (data => console.log (data))
      .catch (error => console.log (error));

      sendEmail();
    setDisplayForm (false);
  }

  function handleTitle (e) {
    setFormTitle (e.target.value);
  }

  function handleQuestion (e) {
    setFormQues (e.target.value);
  }

  function testing(content,editor)
  {
    setFormQues (content);
  }
  return (
    <div className="right-section">
      <div className="first-section">
        <h1 className="heading">Ask Question</h1>
        
      </div>
      {displayForm
        ? <form className="second-section" onSubmit={submitted}>
            <div className="title-module">
              <input
                className="title"
                name="title"
                type="text"
                placeholder="Title of the question"
                onChange={handleTitle}
                required
              />
              <Modules setFormModule_id={setFormModule_id} />
            </div>

            <div className={textAreaClass}>
              <Editor 
                className="ask-question-text-editor"
                initialValue=" "
                apiKey="6zfdz2vb9rz2gg2liptwfxsbeeuhuung7rkugyxkfi29o1f3"
                init={{
                  selector: 'textarea', // change this value according to your HTML
                  height: 500,
                  menubar: false,
                  forced_root_block : false,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code codesample fullscreen',
                    'insertdatetime media table code help wordcount',
                    'a11ychecker advcode casechange formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable',
                  ],
                  toolbar: 'undo redo | formatselect fontselect fontsizeselect forecolor| bold italic backcolor | \
                      alignleft aligncenter alignright alignjustify | \
                      bullist numlist | removeformat |casechange code codesample help',
                  menubar: 'tools',
                }}
                onEditorChange={testing}
              />
              <input className="post-btn" type="submit" value="Post" />
            </div>
          </form>
        : <div className="ask-another-question-container">
            <h1 className="question-posted-heading">THANK YOU! </h1>
            <p className="question-posted-message">
              Your question has been posted! You Will recieve an email when someone responds to your question.
            </p>
            <button className="ask-another-question-btn" onClick={askAnother}>
              Ask Another Question
            </button>
            
          </div>}

    </div>
  );
}

export default RightSection;
