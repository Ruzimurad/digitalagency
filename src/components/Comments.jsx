import React from "react";
import CommentsImg from "/images/comments-img.png"
import CommentsImg2 from "/images/comments-img2.png"
import CommentsImg3 from "/images/comments-img3.png"
export function Comments() {
    return (
        <section className="comments">
            <div className="container">
                <h1 className="comments-subtitle">TESTIMONIALS</h1>
                <p className="comments-title">Read What Other have to Say</p>
                <div className="comments-wrap">
                    <div className="comments-card">
                        <div className="comments-card__image">
                            <img src={CommentsImg} alt="image" />
                        </div>
                        <div className="comments-card__content">
                            <h3 className="comments-card__title">Andrew Rathore</h3>
                            <p className="comments-card__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                        </div>
                    </div>
                    <div className="comments-card">
                        <div className="comments-card__image">
                            <img src={CommentsImg2} alt="image" />
                        </div>
                        <div className="comments-card__content">
                            <h3 className="comments-card__title">Vera Duncan</h3>
                            <p className="comments-card__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.  </p>
                        </div>
                    </div>
                    <div className="comments-card">
                        <div className="comments-card__image">
                            <img src={CommentsImg3} alt="image" />
                        </div>
                        <div className="comments-card__content">
                            <h3 className="comments-card__title">Mark Smith</h3>
                            <p className="comments-card__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comments