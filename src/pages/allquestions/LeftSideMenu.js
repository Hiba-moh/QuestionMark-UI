import React from 'react';
import {Link, useHistory} from 'react-router-dom';

const LeftSideMenu = () => {
  return (
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
  );
};

export default LeftSideMenu;
