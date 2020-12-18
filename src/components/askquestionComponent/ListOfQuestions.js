import React from "react";

// This component contains the list of questions that has been passed as a parameter.
function ListOfQuestions({questions})
{
    questions=Array.from(questions);//converting object to array in order to use map.

    return(
        <div>
            <ul className="question-list">
                {questions.map((name, index) => (
                    <li className="question" key={index}>{name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListOfQuestions;