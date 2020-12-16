import React,{useState} from 'react';
import './AskQuestionComponent.css'
import Modules from './Modules';

function RightSection()
{
    // This is a state variable which will store the value selected from drop down menu and then it will be sent to post request.
    let [selectedModule,setSelectedModule]=useState("");

    return(
        <div className="right-section">
            <div className="first-section">
                <h1 className="heading">Ask Question</h1>
                <button className="logout-btn">Logout</button>
            </div>
            <form className="second-section">
                <div className="title-module">
                    <input className="title" name="title" type="text" placeholder="Title of the question" required />
                    <Modules setSelectedModule={setSelectedModule}/>
                </div>

                <div className="text-post">
                    <textarea className="ques-text"name="title" type="text" placeholder="Type your question here" required/>
                    <input className="post-btn" type="submit" value="Post"/>
                </div>
            </form>
        </div>
    )

}

export default RightSection;
