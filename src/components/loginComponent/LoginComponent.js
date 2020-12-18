import React, { useState } from 'react'
import './LoginComponent.css';
import { useHistory, Link } from 'react-router-dom';



function LoginComponent(props) {

    const [logUsername, setLogUsername] = useState("");
    const [logPassword, setLogPassword] = useState("");

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
        fetch('http://localhost:3003/login', options)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);


            if(data.success === false){
                //localStorage.setItem("token", JSON.stringify(data)); //stores token in local storage
                history.push('/signup');
                
            }else{
                history.push('/allquestions');
               
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
    
    return (
        <div className="login_container">
            <div className="login_title">
                <h2>Log In</h2>
            </div>
            <div className="login_form">
                <form onSubmit={handleSubmit}>
                    <input name="username" type="text" placeholder="Username" onChange={handleLogUsername} required /> 
                    <input name="password" type="password" placeholder="Password" onChange={handleLogPassword} required /> 
                    <div className="login_form_btn">
                        <button type="submit">Login</button>
                    </div>
                    <div className="login_btn_links">
                        <p><Link to="/signup">Sign up | Forgot password?</Link></p>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default LoginComponent



// import React from 'react'
// import './LoginComponent.css';

// function LoginComponent() {
//     return (
//         <div className="login_container">
//             <div className="login_title">
//                 <h2>Log In</h2>
//             </div>
//             <div className="login_form">
//                 <form>
//                     <input name="username" type="text" placeholder="Username" required /> 
//                     <input name="password" type="password" placeholder="Password" required /> 
//                     <div className="login_form_btn">
//                         <button type="submit">Login</button>
//                     </div>
//                     <div className="login_btn_links">
//                         <p>Sign up | Forgot password?</p>
//                     </div>
//                 </form>
//             </div>
            
//         </div>
//     )
// }

// export default LoginComponent