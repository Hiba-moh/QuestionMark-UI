import React, {useState} from 'react'
import './SignupComponent.css';
import { useHistory } from 'react-router-dom';


function SignupComponent() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const history = useHistory();

    // const register = () => {
    //     Axios.post('https://question-mark-api.herokuapp.com/register', {
    //         username: name, 
    //         password: password,
    //         email: email
    //     }).then((response) => {
    //         console.log(response);
    //     })

    // };

    const details = {
       username: name, 
        password: password,
        confirm: confirm,
        email: email
        // role
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(details)
    }

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handlePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    const handleConfirm = (e) => {
        setConfirm(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleRole = (e) => {
        setRole(e.target.value);
    }

   // https://lowly-foam-badger.glitch.me/creatures
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:3003/register', options)
        .then(response => {
            return response.json();
        })
        .then(data => {
           data ? console.log({success: true}) : console.log({success: false});
           if(data.success === true){
            localStorage.setItem("token", JSON.stringify(data)); 
            history.push('/login');
           }else{
            console.log('Registration failed');
           }
           
        })
        .catch(e => {
            console.error(e);
        })
        
    }

    return (
        <div className="signupComponent_container">
             <div className="signup_title">
               <h2>Sign up</h2>
           </div>
           <div className="signup_form">
               <form onSubmit={handleSubmit} >
                   <input  name="username" type="text" placeholder="Username"  onChange={handleName} required/>
                   <input name="email" type="email" placeholder="email" onChange={handleEmail} required/>
                   <input name="password" type="password" placeholder="Password" onChange={handlePassword} required/>
                   <input name="confirm" type="password" placeholder="Confirm password" onChange={handleConfirm} required/>
                   {/* <input name="role" type="text" placeholder="Student/Teacher" onChange={handleRole} required/> */}
                   <div className="signup_form_btn">
                       <button  type="submit">Register</button>
                   </div>
               </form>
           </div>
           
            
        </div>
    )
}

export default SignupComponent;


