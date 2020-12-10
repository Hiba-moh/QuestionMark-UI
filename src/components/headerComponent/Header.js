import React from 'react'
import './Header.css'
import logo from '../../assets/images/QandA.png';

function Header() {
    return (
        <div className="header_container">
          <header>
              <div className="header_logo">
                  <img src={logo} alt="logo" />
              </div>
             
          </header>
            
        </div>
    )
}

export default Header
