import React, {useState, useEffect} from 'react';
import '../allQuestionsComponent/AllQuestionsComponent.css';
import {Link, useHistory} from 'react-router-dom';

const AllQuestionsComponent = () => {
  const [answeredList, setAnsweredList] = useState ([]);
  const [filter, setFilter] = useState ([]);
  const [modulequestions, setModulequestions] = useState ([]);
  const [input, setInput] = useState ('');
  const history = useHistory ();
  useEffect (() => {
    fetch (`https://question-mark-api.herokuapp.com/answered`)
      .then (res => {
        console.log (res);
        if (!res.ok) {
          throw Error (res.status + ' _ ' + res.url);
        }
        return res.json ();
      })
      .then (data => {
        setModulequestions (data.answered);
        setAnsweredList (data.answered);
        setFilter (data.filter);
      })
      .catch (error => {
        console.error (error);
      });
  }, []);

  const changeModulequestions = questionModuleId => {
    if (questionModuleId == 'default') {
      setModulequestions (answeredList);
    } else {
      let filtered = [];
      for (let i = 0; i < answeredList.length; i++) {
        if (answeredList[i].module_id == questionModuleId) {
          filtered.push (answeredList[i]);
        }
      }
      setModulequestions (filtered);
      // console.log (modulequestions);
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
    let filtered = answeredList.filter (
      question =>
        question.question.toLowerCase ().includes (key.toLowerCase ()) ||
        question.answer.toLowerCase ().includes (key.toLowerCase ())
    );

    setModulequestions (filtered);
  };

  return (
    <div>
      <div className="search-container">
        <div className="form1">
          <form>
            <input
              className="searchbox-only"
              name="search"
              type="text"
              onChange={handleSearch}
              placeholder="SEARCH HERE ..."
            />
            {/* <button class="searchbtn">SEARCH</button> */}
          </form>
        </div>
        <div className="form2">
          <form>
            <button
              className="askq-btn"
              onClick={() => {
                history.push ('/askquestion');
              }}
            >
              ASK QUESTION
            </button>
          </form>
        </div>
      </div>

      <div className="bodyContent">
        <h1 id="page-heading">ANSWERED QUESTIONS</h1>

        <div className="link-filter">
          <ul className="ul">
            <li className="li">
              {' '}<Link to="/Answered"> ANSWERED QUESTIONS </Link>
            </li>
            |
            <li className="li">
              {' '}<Link to="/UnAnswered"> UNANSWERED QUESTIONS </Link>
            </li>
            |
            <li className="li">
              <Link to="/allquestions">ALL QUESTIONS</Link>
            </li>
          </ul>

          <select id="moduleSelector" onChange={changeHandler}>
            <option value="default">FILTER BY MODULE</option>
            {filter.map (item => {
              return <option value={item.id}>{item.module}</option>;
            })}
          </select>
        </div>

        <div className="allquestions-container">
          <div className="allquestions1">
            {modulequestions.map (answer => (
              <div className="question1">
                <div>
                  {' '}  <h3 className="answer-header">  {answer.question}</h3>
                </div>
                <div>  <p className="answer-only"> {answer.answer}</p></div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AllQuestionsComponent;
