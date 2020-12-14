import React, {useState, useEffect} from 'react';
import '../allQuestionsComponent/AllQuestionsComponent.css';
import {Link, useHistory} from 'react-router-dom';

const AllQuestionsComponent = () => {
  const [list, setList] = useState ([]);
  const [filter, setFilter] = useState ([]);
  const history = useHistory ();
  useEffect (() => {
    fetch (`https://api-test111.herokuapp.com/allquestions`)
      .then (res => {
        console.log (res);
        if (!res.ok) {
          throw Error (res.status + ' _ ' + res.url);
        }
        return res.json ();
      })
      .then (data => {
        console.log (data.allquestions);
        setList (data.allquestions);
        setFilter (data.filter);
      })
      .catch (error => {
        console.error (error);
      });
  }, []);

  return (
    <div>
      <div class="search-container">
        <div class="form1">
          <form>
            <input
              class="searchbox"
              name="search"
              type="text"
              placeholder="Search Here ..."
            />
            <button class="searchbtn">search</button>
          </form>
        </div>
        <div class="form2">
          <form>
            <button
              class="ask-btn"
              onClick={() => {
                history.push ('/askquestion');
              }}
            >
              Ask Question
            </button>
          </form>
        </div>
      </div>
      <h1>All Questions</h1>

      <ul>
        <li> <Link to="/Answered"> Answered </Link></li>|
        <li> <Link to="/UnAnswered"> UnAnswered </Link></li>|
        <li><Link to="/allquestions">All</Link></li>
      </ul>

      <div class="allquestions-container">
        <div class="allquestions1">
          {list.map (question => (
            <div class="question1">
              <a href="/Unanswerd">{question.question}</a>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default AllQuestionsComponent;
