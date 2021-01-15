import React from "react"
import "./Information.css"
function Information()
{
    return(
        <div className="about-us-info-container">
            <h1 className="info-heading">About us</h1>
            <p>QuestionMark forum is primarily a platform created for CodeYourFuture students and affiliates. It is a place where students can ask technical questions related to the modules covered in the CYF syllabus. Alternatively students or affiliates can reply to questions. </p>
            <h2>How to use the platform</h2>
            <p>To answer questions users must login and simply select questions from the home page and click reply. On reply of a question the user who asked the question will get an email notification and a slack message on the forum (#questiomark_forum). When a student or an affiliate wants to asks a question he/she must select the askquestion link found in the header or the side bar and follow the instructions, users will also get an email notification on submission of a question. </p>
            
            
        </div>
    )
}

export default Information;