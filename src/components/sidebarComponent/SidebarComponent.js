import React from 'react';
import './SidebarComponent.css';
import {Link} from 'react-router-dom';
import Avatar from '../../assets/images/user.png';
import {useState, useContext} from 'react/cjs/react.development';
import axios from 'axios';
import {AuthContext} from '../../AuthContext';

function SidebarComponent () {
  const {isAuth, greet, idNumber} = useContext (AuthContext);
  const [isAuthValue, setIsAuthValue] = isAuth;
  const [greetValue, setGreetValue] = greet;
  const [idNumberValue, setIdNumberValue] = idNumber;

  const [selectedFile, setSelectedFile] = useState (null);
  const handleFileChange = event => {
    setSelectedFile (event.target.files[0]);
  };
  const fileUploadHandler = () => {
    axios.post;
  };
  return (
    <div className="sidebar_container">
      <h2>Welcome {greet}</h2>
      <img id="userImg" src={Avatar} alt="avatar" />

      <div className="sidebar_links">

        <input type="file" onChange={handleFileChange} />
        <button onClick={fileUploadHandler}>UPLOAD</button>
      </div>

    </div>
  );
}

export default SidebarComponent;
