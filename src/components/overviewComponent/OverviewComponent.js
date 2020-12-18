import React from "react"
import "./OverviewComponent.css"

function OverviewComponent()
{
    return(
        <div className="overview-full-container">
            <div className="overview-top-container">
                <div className="overview-btn-container">
                    <button className="overview-btn"> Ask a question </button>
                    <button className="overview-btn">Home Page</button>
                </div>
               <h1 className="overview-heading">Welcome to CYF Q/A platform</h1> 
            </div>
            <div className="overview-description-container">
                <h1 className="overview-description-heading"> About this platform</h1>
                <div className="overview-description">
                    This is the question and answer platform for cyf student, 
                    it will allow them to easily ask questions from any other 
                    cyf member.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                     ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                     Duis aute irure dolor in reprehenderit in voluptate velit esse 
                     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     This is the question and answer platform for cyf student, 
                    it will allow them to easily ask questions from any other 
                    cyf member.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                     ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                     Duis aute irure dolor in reprehenderit in voluptate velit esse 
                     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
    )
}

export default OverviewComponent;