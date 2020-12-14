import React from 'react'
import './TextareaComponent.css';

function TextareaComponent() {
    return (
        <div className="textarea_container">
            
            <form>
                <div className="textarea_form_label">
                    <label for="reply" placeholder="Title">Question title</label>
                </div>
                    <textarea name="reply" id="reply" rows="10" cols="50"></textarea>
                <div className="textarea_form_btn">
                <button type="submit">Reply</button>
                </div>
            </form>

        </div>
        
    )
}

export default TextareaComponent