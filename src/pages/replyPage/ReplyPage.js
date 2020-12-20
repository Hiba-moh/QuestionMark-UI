import React from 'react'
import './ReplyPage.css';
import SidebarComponent from '../../components/sidebarComponent/SidebarComponent'
import TextareaComponent from '../../components/textareaComponent/TextareaComponent';
import ButtonComponent from '../../components/buttonComponent/ButtonComponent';
import Header from '../../components/headerComponent/Header'


function ReplyPage() {
    return (
        <div className="reply_outer_container">
            <div className="reply_header">
                <Header />
            </div>
            <div className="reply_container">
            <div className="reply_sidebar">
              <SidebarComponent />
            </div>
            <div className="reply_body">
                <div className="reply_titleandbtn_container">
                <div className="reply_title">
                    <h2>Reply to the question</h2>
                </div>
                <div className="reply_btn">
                    <ButtonComponent label="Logout"/>
                </div>

                </div>
                <div className="reply_textarea_container">
                    <TextareaComponent subtitle="Title of the question" description="Enter your reply here..."/>
                    <ButtonComponent label="reply"/>
                </div>
    
                
            </div>
        </div>

        </div>
        
    )
}

export default ReplyPage