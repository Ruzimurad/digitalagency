import React from "react"
export function Footer() {
    return <footer className="footer">
        <div className="container">
            <div className="footer-wrap">
                <div className="footer-top">
                    <div className="footer-content">
                        <h2 className="footer-toptitle">Digital Agency</h2>
                        <p className="footer-subtitle">Building digital products, 
                        brands & experience</p>
                        </div>
                        <div className="footer-content">
                        <h2 className="footer-text">Resources</h2>
                        <div className="footer-links">
                        <a href="/">Guides</a>
                        <a href="/">Blog</a>
                        <a href="/">Cuistomer Stories</a>
                        <a href="/">Glossery</a>
                        </div>
                        </div>
                        <div className="footer-content">
                        <h2 className="footer-text">Company</h2>
                        <div className="footer-links">
                        <a href="/">About Us</a>
                        <a href="/">Careers</a>
                        <a href="/">Careers</a>
                        <a href="/">Contact Us</a>
                        </div>
                        </div>
                </div>
                <div className="footer-bottom"></div>
            </div>
        </div>
    </footer>
}

export default Footer