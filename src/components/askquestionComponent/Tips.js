import React,{useState} from "react"
import "./Tips.css"

function Tips({setTextAreaClass})
{
    const [expand,setExpand]=useState(false);
    let overlayclass="";

    function closeNav() {
        setExpand(false);
        setTextAreaClass("text-post-visible") 
    }
    function handleClick()
    {
        setExpand(true);
        setTextAreaClass("hidden-text-post")
    }

    expand? (overlayclass="overlay"):(overlayclass="overlay-hidden")
    return (
        <div className="tips-circle">
            <div id="myNav" class={overlayclass}>
                <button className="closebtn" onClick={closeNav}>&times;</button>
                <div className="overlay-content">
                    <h1 className="tips-heading">Tips for asking a good question </h1>
                    <ul className="tips-list">
                        <li className="tip"> Explain your question Title clearly </li>
                        <li className="tip"> Select the right module for your question</li>
                        <li className="tip"> Explain what you have tried already</li>
                        <li className="tip"> Do not forget to paste your code </li>
                        <li className="tip"> Paste the errors that your code is having</li>
                        <li className="tip"> Try to explain what kind of answer are you expecting</li>
                        
                    </ul>
                    <p></p>
                </div>
            </div>
            <button className="tips-text" onClick={handleClick}> Tips For asking a good question</button>
        </div>
    )
}
export default Tips;