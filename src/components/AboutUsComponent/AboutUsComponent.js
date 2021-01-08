import React from "react"
import AnimatingHeading from "./AnimatingHeading"
import Information from "./Information"
import "./AboutUs.css"


function AboutUsComponent()
{
    return(
        <div>
            <div>
                <AnimatingHeading/>
                <Information/>
            </div>
        </div>
    )
}

export default AboutUsComponent;