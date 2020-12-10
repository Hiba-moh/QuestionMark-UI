import React from 'react'
import './SignupComponent.css';

function SignupComponent() {
    return (
        <div className="signupComponent_container">
             <div className="signup_title">
               <h2>Sign up</h2>
           </div>
           <div className="signup_form">
               <form>
                   <input name="username" type="text" placeholder="Username" required/>
                   <input name="password" type="password" placeholder="Password" required/>
                   <input name="confirm" type="password" placeholder="Confirm password" />
                   <input name="email" type="email" placeholder="email" required/>
                   <input name="role" type="text" placeholder="Student/Teacher" required/>
                   <div className="signup_form_btn">
                       <button type="submit">Register</button>
                   </div>
               </form>
           </div>
           
            
        </div>
    )
}

export default SignupComponent