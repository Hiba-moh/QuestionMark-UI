import React from 'react'
import './TextareaComponent.css';

function TextareaComponent({subtitle, description}) {
    return (
        <div className="textarea_container">
            
            <form>
                <div className="textarea_form_label">
                    <label for="reply" placeholder="Title">{subtitle}</label>
                </div>
                    <textarea name="reply" id="reply" rows="10" cols="50" placeholder={description}></textarea>
                <div className="textarea_form_btn">
                <button type="submit">Reply</button>
                </div>
            </form>

        </div>
        
    )
}

export default TextareaComponent