import React from "react";
import AdviceImg from "/images/customer-support.png"

 export function Advice(){
    return(
    <section className="advice">
        <div className="container">
            <div className="advice-wrap">
                <div className="advice-image">
                    <img src={AdviceImg} alt="image" />
                </div>
                <div className="advice-content">
                    <h1 className="advice-title">Be a part of the next big thing</h1>
                    <p className="advice-subtitle">We work with Brans, Startups, to SMEs. Colaborate for more impact and growt
                    </p>
                    <button className="advice-button">Contact us</button>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Advice