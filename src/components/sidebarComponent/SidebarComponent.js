import React from 'react';
import './SidebarComponent.css';
import {Link} from 'react-router-dom';
import Avatar from '../../assets/images/user.png';

function SidebarComponent () {
  return (
    <div className="sidebar_container">
      <img id="userImg" src={Avatar} alt="avatar" />

      <div className="sidebar_links">

        <p className="side-links">
          <Link to="/userAnswered">ANSWERS</Link>
        </p>
        <p className="side-links">
          <Link to="/userAsked">QUESTIONS </Link>
        </p>
      </div>

    </div>
  );
}

export default SidebarComponent;
