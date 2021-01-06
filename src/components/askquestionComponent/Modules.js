import React, {useState, useEffect} from 'react';
import './AskQuestionComponent.css';

function Modules({setFormModule_id}) {
  function handleClick (event) {
    let selectedModule = event.target.value;
    let modulesArray = [
      'Git and Github',
      'HTML/CSS',
      'JavaScript',
      'React',
      'Nodejs',
      'SQL',
      'MongoDB',
    ];
    let foundIndex = modulesArray.indexOf (selectedModule);
    setFormModule_id (foundIndex + 1);
  }

  let [modules, setModules] = useState ([]);

  useEffect (() => {
    fetch ('https://question-mark-api.herokuapp.com/modules')
      .then (data => data.json ())
      .then (data => setModules (data))
      .catch (e => console.log (e));
  }, []);

  return (
    <div>
      <form className="module-drop-down">
        <label htmlFor="modules" />
        <select onChange={handleClick} name="modules" id="modules">
          {modules.map ((element, index) => (
            <option key={index} value={element.module}>{element.module}</option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default Modules;
