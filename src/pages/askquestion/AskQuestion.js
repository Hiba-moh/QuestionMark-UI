import React from 'react'
import AskQuestionComponent from '../../components/askquestionComponent/AskQuestionComponent';
import Header from '../../components/allQuestionsComponent/Header';

function AskQuestion() {
    return (
        <div>
            <Header />
            <AskQuestionComponent  />
        </div>
    )
}

export default AskQuestion