import React,{useState} from 'react';
import ListOfQuestions from "./ListOfQuestions"
import './AskQuestionComponent.css'

function LeftSection({overlayclass,closeNav,selectedOption,listOfQues,user,setAnsweredQUes,setUnAnsweredQues})
{
    return(
         <div className="left-section">
            <div id="myNav" class={overlayclass}>
            
            <button className="closebtn" onClick={closeNav}>&times;</button>
                <div className="overlay-content">
                    <h1>List of {selectedOption} </h1>
                    <ListOfQuestions questions={listOfQues} />
                </div>
            </div>
            <p className="ask-question-user-name">Welcome {user.name}</p>
            <button className="side-button" onClick={setAnsweredQUes}>Answered question</button>
            <button className="side-button" onClick={setUnAnsweredQues}>UnAnswered Question</button>
        </div>
    )
}

export default LeftSection;
