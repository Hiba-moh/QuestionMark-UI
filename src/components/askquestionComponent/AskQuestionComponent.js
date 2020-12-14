import React,{useState} from 'react';
import ListOfQuestions from "./ListOfQuestions"
import './AskQuestionComponent.css'

function AskQuestionQuestion()
{
    // This is used to bring the slider from the side. If it is true then we render the slider on the page (Overlay slider)
    const [expand,setExpand]=useState(false);

    // this will be the list of questions sent to overlay content component.
    const [listOfQues,setListOfQues]=useState("");
    // This is either Answered Question or Unanswered Question
    const [selectedOption,setSelectedOption]=useState("")
  
    // This if for the close button of the overlay slider.
    function closeNav() {
        setExpand(false);
    }

    // This is the classname given to overlay Content, if expand variable is true then we give it a class with width as 100% which make the slider visible.
    let overlayclass="";

    // This is the object of the user that has logged in, we will extract user's information and then use it.
    // We will have to make another function to fetch from API and then store that users data into an object and return it and use it here.
    let user={}; // this is the object that we will update after fetching from api
    user.name="Iron Man"
    user.answeredQues=["How to use javascript","How to start node","How to start node","How to start node","How to start node"];
    user.unAnsweredQues=["How to use sql","How to start React","How to start React","How to start React","How to start React"];

    // These functions set the arrays , data taken from the api will be copied into these state Variable which will then be sent to list of questions component.
    function setAnsweredQUes()
    {
        setSelectedOption("Answered Questions");
        setExpand(true);
        setListOfQues(user.answeredQues);
    }
    function setUnAnsweredQues()
    {
        setSelectedOption("Unanswered Questions");
        setExpand(true);
        setListOfQues(user.unAnsweredQues);
    }

    // If expand variable is true then we choose the class which has width as 100%, it makes the slider visible on the screen.
    expand? (overlayclass="overlay"):(overlayclass="overlay-hidden")


    return(
     
    <div className="container">

        <div className="left-section">
            <div id="myNav" class={overlayclass}>
            
            <button className="closebtn" onClick={closeNav}>&times;</button>
                <div className="overlay-content">
                    <h1>List of {selectedOption} </h1>
                    <ListOfQuestions questions={listOfQues} />
                </div>
            </div>
            <img alt="Profile pic"className="profile-pic" src="https://images.immediate.co.uk/production/volatile/sites/3/2018/05/IRON-2008-d7a2706.jpg?quality=90&resize=768,574"></img>
            <p>{user.name}</p>
            <button className="side-button" onClick={setAnsweredQUes}>Answered question</button>
            <button className="side-button" onClick={setUnAnsweredQues}>UnAnswered Question</button>
        </div>



        <div className="right-section">
            <div className="first-section">
                <h1 className="heading">Ask Question</h1>
                <button className="logout-btn">Logout</button>
            </div>
            <div className="second-section">
                <form className="title-module">
                    <input className="title" name="title" type="text" placeholder="Title of the question" required />
                    <input className="module"name="title" type="text" placeholder="Module" required />
                </form>

                <form className="text-post">
                    <textarea className="ques-text"name="title" type="text" placeholder="Type your question here" required/>
                    <input className="post-btn" type="submit" value="Post"/>
                </form>
            </div>
        </div>
       
    </div>)
}

export default AskQuestionQuestion;