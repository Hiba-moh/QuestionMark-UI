import React,{useState} from 'react';
import ListOfQuestions from "./ListOfQuestions"
import './AskQuestionComponent.css'
import LeftSection from './LeftSection';
import RightSection from './RightSection';

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

       <LeftSection overlayclass={overlayclass} closeNav={closeNav} selectedOption={selectedOption} listOfQues={listOfQues} user={user} setAnsweredQUes={setAnsweredQUes} setUnAnsweredQues={setUnAnsweredQues}/>
       <RightSection/>
       
    </div>)
}

export default AskQuestionQuestion;