import React, {useState, useContext} from 'react';
import './LoginComponent.css';
import {useHistory, Link, withRouter} from 'react-router-dom';
import NormalHeaderComponent
  from '../normalHeaderComponent/NormalHeaderComponent';
import {AuthContext} from '../../AuthContext';
import loginImg from '../../assets/images/login.png'

function LoginComponent (props) {
  //const [isAuth, setIsAuth] = useContext (AuthContext);
  const {isAuth, greet, idNumber} = useContext(AuthContext); 
   const [isAuthValue, setIsAuthValue] = isAuth;
   const [greetValue, setGreetValue] = greet; 
   const [idNumberValue, setIdNumberValue] = idNumber;

  const [logUsername, setLogUsername] = useState ('');
  const [logPassword, setLogPassword] = useState ('');
  const [failedLoginMessage, setFailedLoginMessage] = useState ('');
  const history = useHistory ();

  const details = {
    username: logUsername,
    password: logPassword,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify (details),
  };

    const handleSubmit = async (e) => {
    e.preventDefault ();
   await fetch ('https://question-mark-api.herokuapp.com/login', options)
      .then (response => {
        return response.json();
    
      })
      .then (data => {
        
         console.log(data);
        if (data.success === false) {
          localStorage.setItem ('token', JSON.stringify (data)); //stores token in local storage
          setFailedLoginMessage (data.message);
        } else {
          setIdNumberValue(data.user_id);
          setGreetValue(data.message);
          history.push ('/allquestions');
        }
      })
      .catch (e => {
        console.error (e);
      });
  };
//console.log(idNumber);
  const handleLogUsername = e => {
    setLogUsername (e.target.value);
  };

  const handleLogPassword = e => {
    setLogPassword (e.target.value);
  };

  const handleAuth = () => {
    setIsAuthValue(true);
  };

  return (
    <>
    <NormalHeaderComponent />
    <div className="login_outer_container">
    

      <div className="login_form">
        <img src={loginImg} id='loginImg'></img>
        <h2>Log In</h2>

        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <input
              name="username"
              type="username"
              placeholder="Username"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleLogUsername}
              required
            />
            <input
              name="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={handleLogPassword}
              required
            />
           
              <button id='loginBTN' className="btn btn-danger" onClick={handleAuth} type="submit">
                Login
              </button>
            

              <p id="signup_link">
                <Link to="/signup">Sign up | Forgot password?</Link>
              </p>
           
          </div>

        </form>
        <div className="login_response_message">
          <p>{failedLoginMessage}</p>
        </div>

      </div>

    </div>
    </>
  );
}

export default withRouter (LoginComponent);
