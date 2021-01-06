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
            {/* <img alt="Profile pic"className="profile-pic" src="https://images.immediate.co.uk/production/volatile/sites/3/2018/05/IRON-2008-d7a2706.jpg?quality=90&resize=768,574"></img> */}
            <p className="ask-question-user-name">Welcome {user.name}</p>
            <button className="side-button" onClick={setAnsweredQUes}>Answered question</button>
            <button className="side-button" onClick={setUnAnsweredQues}>UnAnswered Question</button>
        </div>
    )
}

export default LeftSection;
