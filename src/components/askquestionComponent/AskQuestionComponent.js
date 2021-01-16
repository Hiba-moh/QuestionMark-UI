import React, {useState, useContext,useEffect} from 'react';
import ListOfQuestions from './ListOfQuestions';
import './AskQuestionComponent.css';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Footer from '../footerComponent/Footer';

import {withRouter} from 'react-router-dom';
import {AuthContext} from '../../AuthContext';

import Animation from "./Animation"
import Tips from "./Tips"

function AskQuestionQuestion()
{

    const {isAuth, greet, idNumber} = useContext(AuthContext); 
    const [isAuthValue, setIsAuthValue] = isAuth;
    const [greetValue, setGreetValue] = greet; 
    const [idNumberValue, setIdNumberValue] = idNumber;

    if(idNumber[0])
    {
        localStorage.setItem("idValue",idNumber[0]);
    }
  
    //these variables will contain the information from fetched url.
    const [fetchedAnsQues,setFetchedAnsQues]=useState();
    const [fetchedUnAnsQues,setFetchedUnAnsQues]= useState();
    const [fetchedName, setFetchedName]=useState("");
    const [textAreaClass,setTextAreaClass]=useState("text-post-visible")

    // This is used to bring the slider from the side. If it is true then we render the slider on the page (Overlay slider)
    const [expand,setExpand]=useState(false);

    // this will be the list of questions sent to overlay content component.
    const [listOfQues,setListOfQues]=useState("");

    // This is either Answered Question or Unanswered Question
    const [selectedOption,setSelectedOption]=useState("")
  
    // This is for the close button of the overlay slider.
    function closeNav() {
        setExpand(false);
        setTextAreaClass("text-post-visible") // This is to hide the text editor, otherwise it comes on the overlay Content
    }

    
    // This is the class name given to overlay Content, if expand variable is true then we give it a class with width as 100% which make the slider visible.
    let overlayclass="";



    // This fetch will bring the data for the user who us accessing this page.
    useEffect (() => {
        fetch(`https://question-mark-api.herokuapp.com/ask-question/${localStorage.getItem("idValue")}`)
        .then(data=>data.json())
        .then(data=>{
            // console.log("++++----")
            // console.log(data)
            setFetchedName(data.name[0].name)
            setFetchedAnsQues(data.answeredQuestions) // array of objects
            setFetchedUnAnsQues(data.unAnsweredQuestions) // array of objects
        })
        .catch(error=>console.log(error))
      }, []);


    //   fetch("https://question-mark-api.herokuapp.com/modules")
    //   .then(data=>data.json())
    //   .then(data=>{
    //       console.log("----------------")
    //       console.log(data)
    //       console.log("--------------------------------------")
    //   })

    // This is the object of the user that has logged in, we will extract user's name and then use it.
    let user={};
    user.name=fetchedName;

    // These functions set the arrays, data taken from the api will be copied into these state Variable which will then be sent to list of questions component.
    function setAnsweredQUes()
    {
        setSelectedOption("Answered Questions");
        setExpand(true);
        setTextAreaClass("hidden-text-post") // This is to hide the text editor, otherwise it comes on the overlay Content
        setListOfQues(fetchedAnsQues);
    }
    function setUnAnsweredQues()
    {
        setSelectedOption("Unanswered Questions");
        setExpand(true);
        setTextAreaClass("hidden-text-post") // This is to hide the text editor, otherwise it comes on the overlay Content
        setListOfQues(fetchedUnAnsQues);
    }

    // If expand variable is true then we choose the class which has width as 100%, it makes the slider visible on the screen.
    expand? (overlayclass="overlay"):(overlayclass="overlay-hidden")

    return(
        <div>
            <div className="animation-container">
                <Tips setTextAreaClass={setTextAreaClass}/>
                <Animation/>
            </div>
            
            <div className="ask-question-container">
            <LeftSection overlayclass={overlayclass} closeNav={closeNav} selectedOption={selectedOption} listOfQues={listOfQues} user={user} setAnsweredQUes={setAnsweredQUes} setUnAnsweredQues={setUnAnsweredQues}/>
            <RightSection textAreaClass={textAreaClass}userID={idNumber[0]}/>
            </div>
            
            <Footer />
        </div>
    
    )

}

export default withRouter (AskQuestionQuestion);
