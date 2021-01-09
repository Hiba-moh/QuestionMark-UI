import React, {useState} from 'react';
import './SignupComponent.css';

import {useHistory} from 'react-router-dom';
import NormalHeaderComponent
  from '../normalHeaderComponent/NormalHeaderComponent';
import {Link} from 'react-router-dom';

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
    console.log (e.target.value);
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

  // https://lowly-foam-badger.glitch.me/creatures
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
    <div className="signup_outer_container">

      <div className="signup_header">
        <NormalHeaderComponent />
      </div>

      <div className="signupComponent_container">

        <h2>Sign up</h2>

        <div className="form-group">
          <form onSubmit={handleSubmit}>
            <input
              name="username"
              className="form-control"
              id="validationCustom01"
              type="text"
              placeholder="Username"
              onChange={handleName}
              required
            />
            <input
              name="email"
              className="form-control"
              id="validationCustom02"
              type="email"
              placeholder="email"
              onChange={handleEmail}
              required
            />
            <input
              name="password"
              id="validationCustom03"
              className="form-control"
              type="password"
              placeholder="Password"
              onChange={handlePassword}
              required
            />
            <input
              name="confirm"
              className="form-control"
              id="validationCustom04"
              type="password"
              placeholder="Confirm password"
              onChange={handleConfirm}
              required
            />
            {/* <input name="role" type="text" placeholder="Student/Teacher" onChange={handleRole} required/> */}
            <div className="signup_form_btn">
              <button
                id="signUpBtn"
                type="submit"
                className="btn btn-danger form-control"
              >
                Register
              </button>

              <Link id="loginLink" to="/">
                Already have account? login here
              </Link>

            </div>
          </form>
        </div>
        <div className="signup_successfull_message">
          <p>{regFailedMessage}</p>
        </div>

      </div>

    </div>
  );
}

export default SignupComponent;
