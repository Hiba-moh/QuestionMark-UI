import React, {useContext} from 'react';
import '../allQuestionsComponent/Header.css';
import logo3 from '../allQuestionsComponent/logo1.png';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../AuthContext'
import {withRouter} from 'react-router-dom';

function Header () {

  const [isAuth, setIsAuth] = useContext (AuthContext);
 console.log(isAuth);
  return (
    <div className="header_containerH">

      <img src={logo3} alt="logo" />

      <ul className="ul-lined-list">
        <li className="lined-list">
          <Link to="/allquestions">
            Home
          </Link>
        </li>
        <li className="lined-list">
          <Link to="/askquestion">
            Ask question
          </Link>
        </li>
        <li className="lined-list">
          <Link to="/askquestion">
            About
          </Link>
        </li>
        <li className="lined-list">
          <Link to="/login" onClick={() => setIsAuth(false)}>
            Logout
          </Link>
        </li>
      </ul>

    </div>
  );
}

export default withRouter(Header);
