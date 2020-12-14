import React from 'react'
import './ButtonComponent.css';

function ButtonComponent({label}) {
    return (
        <div className="button_container">
            <button type="submit">{label}</button>
        </div>
    )
}

export default ButtonComponent
