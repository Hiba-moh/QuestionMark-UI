import React from 'react'
import './SidebarComponent.css';
import Avatar from '../../assets/images/avatar.png';

function SidebarComponent() {
    return (
        <div className="sidebar_container">
            <div className="sidebar_profile">
                <div className="sidebar_avatar">
                    <img src={Avatar} alt="avatar" />
                    <h3>Welcome</h3>
                    <h4>Username</h4>
                </div>
                <hr/>
            </div>
            <div className="sidebar_links">
                <p>empty links</p>
                <p>empty links</p>
                <p>empty links</p>
                
            </div>
            
        </div>
    )
}

export default SidebarComponent
