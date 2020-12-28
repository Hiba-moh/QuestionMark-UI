import React, { useState, useContext } from 'react';
import './LoginComponent.css';
import { useHistory, Link, withRouter } from 'react-router-dom';
import NormalHeaderComponent from '../normalHeaderComponent/NormalHeaderComponent';
import {AuthContext} from '../../AuthContext';


function LoginComponent(props) {
    const [isAuth, setIsAuth] = useContext(AuthContext);

    const [logUsername, setLogUsername] = useState("");
    const [logPassword, setLogPassword] = useState("");  
    const [failedLoginMessage, setFailedLoginMessage] = useState("");
    const history = useHistory();

    const details = {
        username: logUsername, 
         password: logPassword
     };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(details)
    }

   

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://question-mark-api.herokuapp.com/login', options)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);


            if(data.success === false){
                localStorage.setItem("token", JSON.stringify(data)); //stores token in local storage
                setFailedLoginMessage(data.message);
                
            }else{
                history.push('/replypage');
               
            }  
        })
        .catch(e => {
            console.error(e);
        })   
    }
   
    const handleLogUsername = (e) => {
        setLogUsername(e.target.value);
    }

    const handleLogPassword = (e) => {
        setLogPassword(e.target.value);
    }

    const handleAuth = () =>{
        setIsAuth(true);
    }
    
    return (
        <div className="login_outer_container">
            <div className="login_header">
                <NormalHeaderComponent />
            </div>

            <div className="login_container">
            <div className="login_title">
                <h2>Log In</h2>
            </div>
            <div className="login_form">
                <form onSubmit={handleSubmit}>
                    <input name="username" type="text" placeholder="Username" onChange={handleLogUsername} required /> 
                    <input name="password" type="password" placeholder="Password" onChange={handleLogPassword} required /> 
                    <div className="login_form_btn">
                        <button onClick={handleAuth} type="submit">Login</button>
                    </div>
                    <div className="login_btn_links">
                        <p id="signup_link"><Link to="/signup">Sign up | Forgot password?</Link></p>
                    </div>
                </form>
            </div>
            <div className="login_response_message">
                <p>{failedLoginMessage}</p>
            </div>
            
        </div>

        </div>
        
    )
}

export default withRouter(LoginComponent);


