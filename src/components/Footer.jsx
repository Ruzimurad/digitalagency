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
                    <div className="footer-resources">
                        <h2 className="footer-text">Resources</h2>
                        <div className="footer-links">
                            <ul className="list">
                            <li><a href="/">Guides</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Cuistomer Stories</a></li>
                            <li><a href="/">Glossery</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-company">
                        <h2 className="footer-text">Company</h2>
                        <div className="footer-links">
                            <ul className="list">
                           <li> <a href="/">About Us</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom"></div>
            </div>
        </div>
    </footer>
}

export default Footer