import React from 'react'
import './Header.css'
import logo from '../../assets/images/QandA.png';
import {Link} from 'react-router-dom';


function Header() {
    return (
      
        <div className="header_container">
          <header>
              <div className="header_logo">
                  <img src={logo} alt="logo" />
              </div>
              <div className="header_navbar">
              <div className="navbar_container">
                    <nav>
                        <ul>
                            <li><Link to="/allquestions" style={{
                                textDecoration: 'none',
                                color: 'black'
                                }}>Home</Link></li>
                            <li><Link to="/askquestion" style={{
                                textDecoration: 'none',
                                color: 'black'
                                }}>Ask a question</Link></li>
                            <li><Link to="/askquestion" style={{
                                textDecoration: 'none',
                                color: 'black'
                                }}>About</Link></li>
                            <li><Link to="/askquestion" style={{
                                textDecoration: 'none',
                                color: 'black'
                                }}>Contact</Link></li> 
                        </ul>
                    </nav>
            
                </div>
             </div>
          </header>
            
        </div>
       
    )
}

export default Header
