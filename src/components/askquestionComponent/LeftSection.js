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
            <div className="button-holder">
                <button className="side-button" onClick={() => (window.location = '/userasked')}>Answered question</button>
                <button className="side-button" onClick={() => (window.location = '/useranswered')}>UnAnswered Question</button>
            </div>
           
        </div>
    )
}

export default LeftSection;
