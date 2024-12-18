import React from "react";
import CustomizeImg from "/images/customize-img.png"
import ArrowIcon from "../assets/icons/ArrowIcon"

 export function Customize(){
    return(
        <section className="customize">
            <div className="container">
              <div className="customize-wrap">
              <div className="customize-content">
                <h1 className="customize-title">Custome & Plugin Development</h1>
                <p className="customize-subtitle">Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</p>
                 <ArrowIcon/>
              </div>
              <div className="customize-image">
                <img src={CustomizeImg} alt="customize-image" />
              </div>
              </div>               
            </div>
        </section>
    )
}