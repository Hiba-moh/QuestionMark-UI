import React from 'react'
import TextareaComponent from '../../components/textareaComponent/TextareaComponent';
import './SelectedQuestionPage.css';
import {Link} from 'react-router-dom';
import ButtonComponent from '../../components/buttonComponent/ButtonComponent';

function SelectedQuestionPage() {
    return (
        <div className="selected_container">
            <div className="selected_titleandbtn">
                <div className="selected_title">
                    <h2>Title of the question</h2>
                </div>
                <div className="selected_title_btn">
                    <ButtonComponent routeUrl="/askquestion" label="Ask question" />
                </div>
            </div>
            <div className="selected_link">
            <p><Link to="/replypage">Add reply</Link></p>
            </div>
            <div className="selected_textarea">
                <TextareaComponent subtitle="username" description="Question details here..."/>
               
            </div>
            
        </div>
    )
}

export default SelectedQuestionPage