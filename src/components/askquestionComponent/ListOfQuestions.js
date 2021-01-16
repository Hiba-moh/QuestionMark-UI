import React from "react";
import {Link} from 'react-router-dom';

// This component contains the list of questions that has been passed as a parameter.
function ListOfQuestions({questions})
{
    questions=Array.from(questions);//converting object to array in order to use map.
    return(
        <div>
            <ul className="question-list">
                {questions.map((name, index) => (
                    <Link to={`/selectedquestionpage/${name.id}`} > <li className="question" key={index}>{name.question_title}</li>  </Link>
                ))}
            </ul>
            
        </div>
    )
}

export default ListOfQuestions;