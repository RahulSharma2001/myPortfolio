import React, { useState, useEffect } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showSocial, setShowSocial] = useState(false);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    setShowSocial(!showSocial);
  };

  return (
    <div className="nav_container nav_bar">
      <div className="left">
        <img
          src="https://us.123rf.com/450wm/djvstock/djvstock1508/djvstock150806893/44095667-web-developer-design-vector-illustration-eps-10.jpg?ver=6"
          alt=""
          onClick={handleClick}
        />
        {showSocial && (
          <div className="social-icon-container">
            <FaGithub className="social-icon" />
            <FaLinkedinIn className="social-icon" />
          </div>
        )}
      </div>
      <div className={`right ${isOpen ? "active" : ""}`}>
        <a href="#" className="navbar_items">
          Home
        </a>
        {screenWidth >= 700 && (
          <a href="#experience" className="navbar_items">
            Experience
          </a>
        )}
        <a href="#skills" className="navbar_items">
          Skills
        </a>
        <a href="#projects" className="navbar_items">
          Projects
        </a>
        <a href="#contact" className="navbar_items">
          Contact
        </a>
      </div>
      <div className="hamburger">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </div>
  );
};

export default Navbar;
