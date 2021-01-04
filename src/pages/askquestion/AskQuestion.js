import React from 'react'
import { useParams } from "react-router-dom";
import AskQuestionComponent from '../../components/askquestionComponent/AskQuestionComponent';

//send This id as a parameter to the askQuestion component and then use it in their.
function AskQuestion() {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <AskQuestionComponent  />
        </div>
    )
}

export default AskQuestion