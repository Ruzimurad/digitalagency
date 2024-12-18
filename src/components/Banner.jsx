import React from "react";
import BannerImg from "/images/banner-img.png";


function Banner() {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner-wrap">
                    <div className="banner-content">
                        <h1 className="banner-title">Building digital products, brands & experience</h1>
                        <p className="banner-subtitle">Digital Agency is your online team mangement tool that easy and prompt</p>
                        <button className="banner-button">Contact us</button>
                    </div>
                    <div className="banner-image">
                        <img src={BannerImg} alt="banner-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner