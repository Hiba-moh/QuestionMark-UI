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
                            <li><p><Link to="/allquestions" style={{
                                textDecoration: 'none',
                                color: 'black'
                                }}>Home</Link></p></li>
                            <li><p><Link to="/askquestion" style={{
                                textDecoration: 'none',
                                color: 'black'
                                }}>Ask a question</Link></p></li>
                            <li><p><Link to="/aboutus" style={{
                                textDecoration: 'none',
                                color: 'black'
                                }}>About</Link></p></li>
                            <li><p><Link to="/login" style={{
                                textDecoration: 'none',
                                color: 'black'
                                }}>Logout</Link></p></li> 
                        </ul>
                    </nav>
            
                </div>
             </div>
          </header>
            
        </div>
       
    )
}

export default Header
