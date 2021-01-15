import React, {useState, useContext} from 'react';
import './LoginComponent.css';
import {useHistory, Link, withRouter} from 'react-router-dom';
import NormalHeaderComponent
  from '../normalHeaderComponent/NormalHeaderComponent';
import {AuthContext} from '../../AuthContext';
import loginImg from '../../assets/images/login.png';
import Footer from '../footerComponent/Footer';
import Header from '..//..//components/allQuestionsComponent/Header';

function LoginComponent (props) {
  const {isAuth, greet, idNumber} = useContext (AuthContext);
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

  const handleSubmit = async e => {
    e.preventDefault ();
    await fetch ('https://question-mark-api.herokuapp.com/login', options)
      .then (response => {
        return response.json ();
      })
      .then (data => {
        if (data.success === false) {
          setFailedLoginMessage (data.message);
        } else {
          localStorage.setItem ('user', true);
          setIdNumberValue (data.user_id);
          setGreetValue (data.message);
          history.push ('/allquestions');
        }
      })
      .catch (e => {
        console.error (e);
      });
  };

  const handleLogUsername = e => {
    setLogUsername (e.target.value);
  };

  const handleLogPassword = e => {
    setLogPassword (e.target.value);
  };

  const handleAuth = () => {
    setIsAuthValue (true);
  };

  return (
    <div className="loginContainer">
      <Header />
      {/* <NormalHeaderComponent /> */}
      <div className="errMessage">
        <div class="container h-100">
          <div class="d-flex justify-content-center h-100">
            <div class="user_card">
              <div class="d-flex justify-content-center">
                <div class="brand_logo_container">
                  <img
                    src="https://proofthatblog.com/wp-content/uploads/2013/06/question-mark.jpg"
                    class="brand_logo"
                    alt="Logo"
                  />
                </div>
              </div>

              <div class="d-flex justify-content-center form_container">
                <form onSubmit={handleSubmit}>
                  <div class="input-group mb-3">
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="fas fa-user" />
                      </span>
                    </div>
                    <input
                      type="username"
                      name="username"
                      class="form-control input_user"
                      placeholder="username"
                      onChange={handleLogUsername}
                      required
                    />
                  </div>
                  <div class="input-group mb-2">
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="fas fa-key" />
                      </span>
                    </div>
                    <input
                      type="password"
                      name="password"
                      class="form-control input_pass"
                      placeholder="password"
                      onChange={handleLogPassword}
                      required
                    />
                  </div>
                  <div class="form-group">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customControlInline"
                      />
                      <label
                        class="custom-control-label"
                        for="customControlInline"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mt-3 login_container">
                    <button
                      name="button"
                      class="btn login_btn"
                      onClick={handleAuth}
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>

              </div>

              <div class="mt-4">
                <div class="d-flex justify-content-center links">
                  Don't have an account? <Link to="/signup"> Sign Up</Link>
                </div>
                <div class="d-flex justify-content-center links">
                  <Link to="/signup"> Forgot your password? </Link>
                </div>

              </div>

            </div>

          </div>
          <div className="login_response_message">
            <p>{failedLoginMessage}</p>
          </div>

        </div>

      </div>
     
      <Footer />
    </div>
  );

  
    
  
}

export default withRouter (LoginComponent);
