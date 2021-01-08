import React from "react"
import './AnimatingHeading.css'

function AnimatingHeading()
{
    return(
        <div>
            <div className="animating-container">
                <div className="heading-slogan-container">
                    <div className="heading-text">
                        Welcome to CYF Q/A Platform
                    </div>
                    <p className="slogan">Where all great minds meet each other!</p>
                </div>
                <div className="image-slogan-container">
                    <h1>There is no such thing as a silly question!</h1>
                    <img className="cyf-image"src="https://application-process.codeyourfuture.io/static/media/new-CYF-community.ea61bca0.png"></img>
                </div>
            </div>
        </div>
    )
}

export default AnimatingHeading;