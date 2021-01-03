import React from 'react';
import './TextareaComponent.css';

function TextareaComponent({subtitle, description, answer}) {
  return (
    <div class= 'allsqures'>
      <div>
        <div id="q-titleH" placeholder="Title">{subtitle}</div>
      </div>

      <div>
        <dive id="q-descriptionH">{description}</dive>
      </div>

      <div id = 'q-answerH'>
        {answer}
      </div>
    </div>
  );
}

export default TextareaComponent;
