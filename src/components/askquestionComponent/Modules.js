import React,{useState} from 'react';
import './AskQuestionComponent.css'

function Modules({setSelectedModule})
{
    function handleClick(event)
    {
        setSelectedModule(event.target.value)
    }
    
    //later we will fetch the modules from database and set the modules from there.
    let [modules,setModules]=useState(["html","css","Javascript","node","react","sql"]);

    return(
        <div>
            <form className="module-drop-down">
                <label htmlFor="modules"></label>
                <select onChange={ handleClick } name="modules" id="modules">
                {
                    modules.map((module,index)=> <option key={index} value={module}>{module}</option>)
                }
                </select>
            </form>
        </div>
    )
}

export default Modules;