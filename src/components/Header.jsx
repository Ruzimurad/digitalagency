import React from "react";
import MenuIcon from "../assets/icons/MenuIcon";

function Header() {

  function handleClick(){
    
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <a href="/" className="header__logo">
            Digital Agency
          </a>
          <div className="nav header__nav">
            <a href="#">Home</a>
            <a href="#">about</a>
            <a href="#">Testimonials</a>
            <a href="#">contact</a>
          </div>
          <button className="header__menu-button" onClick={handleClick}>
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );

}

export default Header;