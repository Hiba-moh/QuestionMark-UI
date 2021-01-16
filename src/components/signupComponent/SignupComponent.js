import React, {useState} from 'react';
import './SignupComponent.css';

import {useHistory} from 'react-router-dom';
import NormalHeaderComponent
  from '../normalHeaderComponent/NormalHeaderComponent';
import {Link} from 'react-router-dom';
import Header from '..//..//components/allQuestionsComponent/Header';
import Footer from '..//..//components/footerComponent/Footer';

function SignupComponent () {
  const [name, setName] = useState ('');
  const [password, setPassword] = useState ('');
  const [confirm, setConfirm] = useState ('');
  const [email, setEmail] = useState ('');
  const [role, setRole] = useState ('');
  const [regFailedMessage, setRegFailedMessage] = useState ('');
  const [successfullyRegistered, setSuccessfullyRegistered] = useState ('');

  const history = useHistory ();

  const details = {
    username: name,
    password: password,
    confirm: confirm,
    email: email,
    // role
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify (details),
  };

  const handleName = e => {
    setName (e.target.value);
  };
  const handlePassword = e => {
    setPassword (e.target.value);
  };
  const handleConfirm = e => {
    setConfirm (e.target.value);
  };
  const handleEmail = e => {
    setEmail (e.target.value);
  };
  const handleRole = e => {
    setRole (e.target.value);
  };

 
  const handleSubmit = e => {
    e.preventDefault ();
    fetch ('https://question-mark-api.herokuapp.com/register', options)
      .then (response => {
        return response.json ();
      })
      .then (data => {
        data ? console.log ({success: true}) : console.log ({success: false});
        if (data.success === true) {
          localStorage.setItem ('token', JSON.stringify (data));
          setSuccessfullyRegistered (data.message);
          setTimeout (history.push ('/'), 2000);
        } else {
          console.log (data.errorArray);
          setRegFailedMessage (data.errorArray[0].message);
        }
      })
      .catch (e => {
        console.error (e);
      });
  };

  return (
    <div className="loginContainer">
      {/* <Header /> */}
      <NormalHeaderComponent />
      <div className="errMessage errMessage_custom">
        <div class="container h-100">
          <div class="d-flex justify-content-center h-100">
            <div class="user_card user_card_custom">
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
                      onChange={handleName}
                      required
                    />
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="fas fa-envelope" />
                      </span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      class="form-control input_user"
                      placeholder="Email"
                      onChange={handleEmail}
                      required
                    />
                  </div>

                  <div class="input-group mb-3">
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
                      onChange={handlePassword}
                      required
                    />
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="fas fa-key" />
                      </span>
                    </div>
                    <input
                      type="password"
                      name="confirm"
                      class="form-control input_pass"
                      placeholder="Confirm password"
                      onChange={handleConfirm}
                      required
                    />
                  </div>

                  <div class="form-group" />
                  <div class="d-flex justify-content-center mt-3 login_container">
                    <button name="button" class="btn login_btn" type="submit">
                      Register
                    </button>
                  </div>
                  <div class="mt-4">
                    <div class="d-flex justify-content-center links">
                      Already have account? login here
                      <Link to="/"> Login</Link>
                    </div>
                    <div class="d-flex justify-content-center links" />

                  </div>

                </form>

              </div>

            </div>

          </div>
          <div className="login_response_message">
            <p>{regFailedMessage}</p>
          </div>

        </div>

      </div>
      <Footer />
    </div>
  );
  
}

export default SignupComponent;
