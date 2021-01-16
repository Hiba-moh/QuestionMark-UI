import React, {useEffect, useState} from 'react';
import rateIcon from '../allQuestionsComponent/rate.png';

const RateComponent = props => {
  const [rate, SetRate] = useState (props.rate);

  const changeRate = async e => {
    e.preventDefault ();
    SetRate (rate + 1);
    try {
      const data = {
        id: props.keyId,
        rate: rate,
      };
      console.log (data);
      const response = await fetch (
        'https://question-mark-api.herokuapp.com/rates',
        {
          method: 'PUT',
          body: JSON.stringify (data),
          mode: 'cors',
          headers: {'Content-Type': 'application/json'},
        }
      );
      console.log (response);
    } catch (err) {
      console.error (err);
    }
  };

  
  return (
    <div className="rateAndImg">
      <a
        id="linkForRate"
        href=""
        onClick={e => {
          changeRate (e);
        }}
      >
        <img className="rateIcon" id={props.key} src={rateIcon} />
        <h5>{rate}</h5>
      </a>
    </div>
  );
};

export default RateComponent;
