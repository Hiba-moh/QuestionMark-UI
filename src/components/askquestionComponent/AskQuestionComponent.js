import React from "react"
import './AskQuestionComponent.css'

function AskQuestionQuestion()
{
    return(<div>
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
    </div>)
}

export default AskQuestionQuestion;