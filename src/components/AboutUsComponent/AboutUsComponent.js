import React from "react"
import AnimatingHeading from "./AnimatingHeading"
import Information from "./Information"
import Footer from '../footerComponent/Footer';
import "./AboutUs.css"


function AboutUsComponent()
{
    return(
        <div>
            <div>
                <AnimatingHeading/>
                <Information/>
                <Footer/>
            </div>
        </div>
    )
}

export default AboutUsComponent