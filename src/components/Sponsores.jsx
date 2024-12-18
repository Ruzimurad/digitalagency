import React from "react";
import Spotify from "/images/Spotify.png"
import Slack from "/images/Slack.png"
import Dropbox from "/images/Dropbox.png"
import Zoom from "/images/Zoom.png"

export function Sponsores() {
    return (
    <section className="sponsores">
        <div className="container">
            <p className="sponsores-subtitle">Trusted by 4,000+ companies</p>
                <div className="sponsores-images">
                  <img src={Spotify} alt="sponsores-image" />
                  <img src={Slack} alt="sponsores-image" />
                  <img src={Dropbox} alt="sponsores-image" />
                  <img src={Zoom} alt="sponsores-image" />
                </div>
        </div>
    </section>
    )
}