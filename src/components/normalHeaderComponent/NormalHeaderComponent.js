import React from 'react'
import './NormalHeaderComponent.css';
import logo from '../../assets/images/QandA.png';
import logo3 from '../allQuestionsComponent/logo1.png';

function NormalHeaderComponent() {
    return (
        <div className="header_containerH">
            <img src={logo3} alt="logo" width="200px" />
        </div>
    
    )
}

export default NormalHeaderComponent
