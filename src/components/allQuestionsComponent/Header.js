import React, {useContext} from 'react';
import '../allQuestionsComponent/Header.css';
import logo3 from '../allQuestionsComponent/logo1.png';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../AuthContext';
import {withRouter} from 'react-router-dom';

function Header () {
  const {isAuth, greet, idNumber} = useContext (AuthContext); //pull all states to be used
  const [isAuthValue, setIsAuthValue] = isAuth;
  const [greetValue, setGreetValue] = greet; //equvilent to setGreet
  const [idNumberValue, setIdNumberValue] = idNumber;


  const handleLogout = () => {
    setIsAuthValue(false);
   localStorage.setItem('user', false);
   localStorage.removeItem("idValue");
   localStorage.removeItem('profileVal');
   localStorage.removeItem('userAskedVal');
   localStorage.removeItem('userAnsweredVal');
   localStorage.removeItem('replyVal');
   localStorage.removeItem('userAskedName');
   localStorage.removeItem('userAnsweredName');

   localStorage.clear("idValue");
   localStorage.clear('profileVal');
   localStorage.clear('userAskedVal');
   localStorage.clear('userAnsweredVal');
   localStorage.clear('replyVal');
   localStorage.clear('userAskedName');
   localStorage.clear('userAnsweredName');

  }

  return (
    <div className="header_containerH">

      <img src={logo3} alt="logo" width="200px" />

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
          <Link to="/aboutus">
            About
          </Link>
        </li>
        <li className="lined-list">
          <Link to="/profile">
            Profile
          </Link>
        </li>
        <li className="lined-list">
          <Link to="/" onClick={handleLogout}>

            Logout
          </Link>
        </li>
      </ul>

    </div>
  );
}

export default withRouter (Header);
