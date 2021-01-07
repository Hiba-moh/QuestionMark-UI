import React,{useState} from "react"
import "./Tips.css"

// function Tips()
// {
//     return (
//         <div className="tips-circle">
//             <p className="tips-text">Tips For asking a good question</p>
//         </div>
//     )
// }
function Tips()
{
    const [expand,setExpand]=useState(false);
    let overlayclass="";

    function closeNav() {
        setExpand(false);
    }
    function handleClick()
    {
        setExpand(true);
    }

    expand? (overlayclass="overlay"):(overlayclass="overlay-hidden")
    return (
        <div className="tips-circle">
            <div id="myNav" class={overlayclass}>
                <button className="closebtn" onClick={closeNav}>&times;</button>
                <div className="overlay-content">
                    <h1>Tips for a good ques hahah</h1>
                    <ul>
                        <li className="tip"> Explain your question Title clearly </li>
                        <li className="tip"> Select the right module for your question</li>
                        <li className="tip"> Explain what you have tried alread</li>
                        <li className="tip"> Do not forget to paste your code </li>
                        <li className="tip"> Paste the errors that your code is having</li>
                    </ul>
                    <p></p>
                </div>
            </div>
            <button className="tips-text" onClick={handleClick}> Tips For asking a good question</button>
        </div>
    )
}
export default Tips;