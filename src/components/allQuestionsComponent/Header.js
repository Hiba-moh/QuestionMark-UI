import React from 'react';
import '../allQuestionsComponent/Header.css';
import logo3 from '../allQuestionsComponent/logo3.png';
import {Link} from 'react-router-dom';

function Header () {
  return (
    <div className="header_container">
      <header>
        <div className="header_logo">
          <img src={logo3} alt="logo" />
        </div>
        <div className="header_navbar">
          <div className="navbar_container">
            <nav>
              <ul>
                <li>
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
                <li>
                  <Link
                    to="/askquestion"
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                    }}
                  >
                    Ask a question
                  </Link>
                </li>
                <li>
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
                <li>
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
            </nav>

          </div>
        </div>
      </header>

    </div>
  );
}

export default Header;
