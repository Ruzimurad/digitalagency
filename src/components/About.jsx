import React from "react";
import AboutImg from "/images/about-img.png"
import ArrowIcon from "../assets/icons/ArrowIcon"
export function About(){
    return(
        <section className="about">
            <div className="container">
                <div className="about-wrap">
                    <div className="about-image">
                        <img src={AboutImg} alt="about-image" />
                    </div>
                    <div className="about-content">
                        <h1 className="about-title">Branding & Design system</h1>
                        <p className="about-subtitle">Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</p>
                        <ArrowIcon />
                    </div>

                </div>

                
            </div>
        </section>
    )
}