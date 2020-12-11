import React from 'react'
import './LoginComponent.css';

function LoginComponent() {
    return (
        <div className="login_container">
            <div className="login_title">
                <h2>Log In</h2>
            </div>
            <div className="login_form">
                <form>
                    <input name="username" type="text" placeholder="Username" required /> 
                    <input name="password" type="password" placeholder="Password" required /> 
                    <div className="login_form_btn">
                        <button type="submit">Login</button>
                    </div>
                    <div className="login_btn_links">
                        <p>Sign up | Forgot password?</p>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default LoginComponent