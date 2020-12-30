import React from 'react';
import {Link, useHistory} from 'react-router-dom';

const LeftSideMenu = () => {
  return (
    <div className="col-and-search-containerH">
      <ul className="ulH">
        <li className="liH">
          {' '}<Link to="/Answered"> ANSWERED QUESTIONS </Link>
        </li>
        |
        <li className="liH">
          {' '}<Link to="/UnAnswered"> UNANSWERED QUESTIONS </Link>
        </li>
        |
        <li className="liH">
          {' '}<Link to="/allquestions">ALL QUESTIONS</Link>
        </li>
        |
        <li className="liH">
          <Link to="/askquestion">ASK QUESTION</Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSideMenu;
