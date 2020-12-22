import React from 'react'
import './NormalHeaderComponent.css';
import logo from '../../assets/images/QandA.png';

function NormalHeaderComponent() {
    return (
        <div className="normal_header_container">
        <header>
            <div className="normal_header_logo">
                <img src={logo} alt="logo" />
            </div>
            
        </header>
          
      </div>
    )
}

export default NormalHeaderComponent
