import React, {useState, useEffect} from 'react';
import '../allQuestionsComponent/AllQuestionsComponent.css';
import {Link, useHistory} from 'react-router-dom';

const AllQuestionsComponent = () => {
  const [unansweredList, setUnansweredList] = useState ([]);
  const [filter, setFilter] = useState ([]);
  const [modulequestions, setModulequestions] = useState ([]);
  const [input, setInput] = useState ('');
  const history = useHistory ();
  useEffect (() => {
    fetch (`https://api-test111.herokuapp.com/unanswered`)
      .then (res => {
        console.log (res);
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
    let filtered = unansweredList.filter (question =>
      question.question.toLowerCase ().includes (key.toLowerCase ())
    );

    setModulequestions (filtered);
  };

  return (
    <div>
      <div class="search-container">
        <div class="form1">
          <form>
            <input
              class="searchbox-only"
              name="search"
              type="text"
              onChange={handleSearch}
              placeholder="SEARCH HERE ..."
            />
            {/* <button class="searchbtn">SEARCH</button> */}
          </form>
        </div>
        <div class="form2">
          <form>
            <button
              class="askq-btn"
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

        <div class="allquestions-container">
          <div class="allquestions1">
            {modulequestions.map (answer => (
              <div class="question1">
                <div>
                  {' '}  <h3 className="answer-header">  {answer.question}</h3>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AllQuestionsComponent;
