import React,{useState,useContext} from 'react';
import ListOfQuestions from "./ListOfQuestions"
import './AskQuestionComponent.css'
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Footer from '../footerComponent/Footer';

import {withRouter} from 'react-router-dom';
import {AuthContext} from '../../AuthContext';
import Axios from "axios";
// import Footer from './components/footerComponent/Footer';


//what is left in this component 
//is send data to heroku link, it is working on localhost just change that to heroku link.
// Take the users id using useParams react hook.
// fetch data from heroku app for the whole page.
function AskQuestionQuestion()
{

    const {isAuth, greet, idNumber} = useContext(AuthContext); 
    const [isAuthValue, setIsAuthValue] = isAuth;
    const [greetValue, setGreetValue] = greet; 
    const [idNumberValue, setIdNumberValue] = idNumber;

    //these variables will contain the information from fetched ur.
    const [fetchedAnsQues,setFetchedAnsQues]=useState();
    const [fetchedUnAnsQues,setFetchedUnAnsQues]= useState();
    const [fetchedName, setFetchedName]=useState("");

    // This is used to bring the slider from the side. If it is true then we render the slider on the page (Overlay slider)
    const [expand,setExpand]=useState(false);

    // this will be the list of questions sent to overlay content component.
    const [listOfQues,setListOfQues]=useState("");

    // This is either Answered Question or Unanswered Question
    const [selectedOption,setSelectedOption]=useState("")
  
    // This is for the close button of the overlay slider.
    function closeNav() {
        setExpand(false);
    }

    
    // This is the class name given to overlay Content, if expand variable is true then we give it a class with width as 100% which make the slider visible.
    let overlayclass="";



    // This fetch will bring the data for the user who us accessing this page.
    fetch(`https://question-mark-api.herokuapp.com/ask-question/${idNumber[0]}`)
    .then(data=>data.json())
    .then(data=>{
        setFetchedName(data.name[0].name)
        setFetchedAnsQues(data.answeredQuestions) // array of objects
        setFetchedUnAnsQues(data.unAnsweredQuestions) // array of objects
    })
    .catch(error=>console.log(error))

    // This is the object of the user that has logged in, we will extract user's name and then use it.
    let user={};
    user.name=fetchedName;

    // These functions set the arrays, data taken from the api will be copied into these state Variable which will then be sent to list of questions component.
    function setAnsweredQUes()
    {
        setSelectedOption("Answered Questions");
        setExpand(true);
        setListOfQues(fetchedAnsQues);
    }
    function setUnAnsweredQues()
    {
        setSelectedOption("Unanswered Questions");
        setExpand(true);
        setListOfQues(fetchedUnAnsQues);
    }

    // If expand variable is true then we choose the class which has width as 100%, it makes the slider visible on the screen.
    expand? (overlayclass="overlay"):(overlayclass="overlay-hidden")

    return(
        <div>
            <div className="container">

            <LeftSection overlayclass={overlayclass} closeNav={closeNav} selectedOption={selectedOption} listOfQues={listOfQues} user={user} setAnsweredQUes={setAnsweredQUes} setUnAnsweredQues={setUnAnsweredQues}/>
            <RightSection userID={idNumber[0]}/>
            </div>
            <Footer />
        </div>
    
    )
}

export default withRouter (AskQuestionQuestion);