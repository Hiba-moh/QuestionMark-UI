import React,{useState} from 'react';
import './AskQuestionComponent.css'
import Modules from './Modules';

function RightSection()
{
    // This is a state variable which will store the value selected from drop down menu and then it will be sent to post request.
    let [selectedModule,setSelectedModule]=useState("");
    let [displayForm,setDisplayForm]=useState(true);

    function askAnother()
    {
        setDisplayForm(true);
    }

    function submitted()
    {
        setDisplayForm(false);
    }
    return(
        <div className="right-section">
            <div className="first-section">
                <h1 className="heading">Ask Question</h1>
                <button className="logout-btn">Logout</button>
            </div>
            {displayForm?
                <form className="second-section" onSubmit={submitted}>
                    <div className="title-module">
                        <input className="title" name="title" type="text" placeholder="Title of the question" required />
                        <Modules setSelectedModule={setSelectedModule}/>
                    </div>

                    <div className="text-post">
                        <textarea className="ques-text"name="title" type="text" placeholder="Type your question here" required/>
                        <input className="post-btn" type="submit" value="Post" />
                    </div>
                </form>
                :
                <div className="ask-another-question-container">
                    <h1 className="question-posted-heading">Congratulations! </h1>
                    <p className="question-posted-message">Your question has been posted! You Will recieve an email when someone responds to your question.</p>
                    <button className="ask-another-question-btn" onClick={askAnother}>Ask Another Question</button>
                </div>
            }
            
    
        </div>
    )

}

export default RightSection;
