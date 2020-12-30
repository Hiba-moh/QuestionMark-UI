import React from 'react'
import { Link } from 'react-router-dom';
import './ButtonComponent.css';

function ButtonComponent({label, routeUrl}) {
    return (
        <div className="button_container">
            <button type="submit"><Link to={routeUrl}>{label}</Link></button>
        </div>
    )
}

export default ButtonComponent
