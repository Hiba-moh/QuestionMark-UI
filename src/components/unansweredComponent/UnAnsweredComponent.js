import React, {useState, useEffect} from 'react';
import '../unansweredComponent/UnAnsweredComponent.css';
import {Link, useHistory} from 'react-router-dom';
import Header from '../allQuestionsComponent/Header';
import git from '../../assets/images/Icons/git.png';
import html from '../../assets/images/Icons/html5.png';
import js from '../../assets/images/Icons/js.png';
import mango from '../../assets/images/Icons/mango1.png';
import node from '../../assets/images/Icons/nodejs.png';
import react from '../../assets/images/Icons/react.png';
import sql from '../../assets/images/Icons/sql.png';

const UnAnsweredComponent = () => {
  const [unansweredList, setUnansweredList] = useState ([]);
  const [filter, setFilter] = useState ([]);
  const [modulequestions, setModulequestions] = useState ([]);
  const [input, setInput] = useState ('');
  const history = useHistory ();

  useEffect (() => {
    fetch (`https://question-mark-api.herokuapp.com/unanswered`)
      .then (res => {
        if (!res.ok) {
          throw Error (res.status + ' _ ' + res.url);
        }
        return res.json ();
      })
      .then (data => {
        setModulequestions (data.unanswered);
        setUnansweredList (data.unanswered);
        setFilter (data.filter);
      })
      .catch (error => {
        console.error (error);
      });
  }, []);

  const changeModulequestions = questionModuleId => {
    if (questionModuleId == 'default') {
      setModulequestions (unansweredList);
    } else {
      let filtered = [];
      for (let i = 0; i < unansweredList.length; i++) {
        if (unansweredList[i].module_id == questionModuleId) {
          filtered.push (unansweredList[i]);
        }
      }
      setModulequestions (filtered);
      
    }
  };

  const changeHandler = event => {
    let key = event.target.value;
    switch (key) {
      case '1':
        changeModulequestions (1);
        break;
      case '2':
        changeModulequestions (2);

        break;
      case '3':
        changeModulequestions (3);

        break;
      case '4':
        changeModulequestions (4);
        break;
      case '5':
        changeModulequestions (5);

        break;
      case '6':
        changeModulequestions (6);
        break;
      case '7':
        changeModulequestions (7);
        break;
      case 'default':
        changeModulequestions ('default');
        break;
    }
  };

  const handleSearch = e => {
    e.preventDefault ();
    let key = e.target.value;
    setInput (key);
    let filtered = unansweredList.filter (question =>
      question.question.toLowerCase ().includes (key.toLowerCase ())
    );

    setModulequestions (filtered);
  };

  const renderSwitch = param => {
    switch (param) {
      case 1:
        return <img className="switchImg" src={git} />;
      case 2:
        return <img className="switchImg" src={html} />;
      case 3:
        return <img className="switchImg" src={js} />;
      case 4:
        return <img className="switchImg" src={react} />;
      case 5:
        return <img className="switchImg" src={node} />;
      case 6:
        return <img className="switchImg" src={sql} />;
      case 7:
        return <img className="switchImg" src={mango} />;
    }
  };

  return (
    <div>
      <Header />
      <div className="searchAndFilter">
        <div className=" mb-3 answered-input-group">
          <input
            className="form-control mr-sm-2 AnsweredSearchBox"
            name="search"
            type="text"
            onChange={handleSearch}
            placeholder="SEARCH HERE ..."
          />

          <select
            className="form-control mr-sm-2 AnsweredSearchBox"
            onChange={changeHandler}
          >
            <option value="default">FILTER BY MODULE</option>
            {filter.map (item => {
              return <option value={item.id}>{item.module}</option>;
            })}
          </select>

        </div>
      </div>

      <div className="responsiveLinks">
        <button
          className="btn btn-danger"
          style={{width: '14rem'}}
          onClick={() => (window.location = '/allquestions')}
        >
          ALL QUESTIONS
        </button>
        <button
          className="btn btn-danger"
          style={{width: '14rem'}}
          onClick={() => (window.location = '/unanswered')}
        >
          UNANSWERED QUESTIONS
        </button>
      </div>

      <div className=" d-flex p-2 Answered-bodyContent">

        <div className="Answered-side">
          <ul className="Answered-side-ul">
            <li className="Answered-side-li">
              {' '}<Link to="/Answered"> ANSWERED QUESTIONS </Link>
            </li>
            |
            <li className="Answered-side-li">
              {' '}<Link to="/UnAnswered"> UNANSWERED QUESTIONS </Link>
            </li>
            |
            <li className="Answered-side-li">
              <Link to="/allquestions">ALL QUESTIONS</Link>
            </li>
            |
            <li className="Answered-side-li">
              <Link to="/askquestion">ASK QUESTION</Link>
            </li>
          </ul>

        </div>
        <div className="Answer-question-outer2-container">
          <h1 id="Answered-page-heading">UNANSWERED QUESTIONS</h1>
          <div className=" Answered-question-outer-container">
            <div className="Answered-questions-container">

              {modulequestions.map ((answer, index) => (
                <div className="one-UnAnswered">

                  <div className="one-Answered-question" key={index}>
                    <h2>Question : </h2>
                    {renderSwitch (answer.module_id)}
                    {' '}{answer.question}
                    <h6>Date : {answer.question_date}</h6>
                    <h6>asked by:{answer.name}</h6>
                  </div>
                  <div className="UnAnswered_reply_linkH">
                    <Link to={`/replypage/${answer.id}`}>Add reply</Link>
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnAnsweredComponent;
