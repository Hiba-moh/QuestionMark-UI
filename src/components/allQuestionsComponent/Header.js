import React from 'react';
import '../allQuestionsComponent/Header.css';
import logo3 from '../allQuestionsComponent/logo1.png';
import {Link} from 'react-router-dom';

function Header () {
  return (
    <div className="header_containerH">

      <img src={logo3} alt="logo" />

      <ul className="ul-lined-list">
        <li className="lined-list">
          <Link
            to="/allquestions"
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
          >
            Home
          </Link>
        </li>
        <li className="lined-list">
          <Link
            to="/askquestion"
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
          >
            Ask question
          </Link>
        </li>
        <li className="lined-list">
          <Link
            to="/askquestion"
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
          >
            About
          </Link>
        </li>
        <li className="lined-list">
          <Link
            to="/askquestion"
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
          >
            Contact
          </Link>
        </li>
      </ul>

    </div>
  );
}

export default Header;
