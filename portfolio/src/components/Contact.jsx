import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="container cContainer" id="contact">
      <h1>Thank You For Visiting My Portfolio</h1>
      <h2>Contact Me On</h2>
      <div className="contact-icon">
        <a href="mailto:sharma.rahul0579@gmail.com">
          <div className="item">
            <IoIosMail />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/rahul-kumar-sharma-811639250/">
          <div className="item">
            <FaLinkedin />
          </div>
        </a>
        <a href="https://github.com/RahulSharma2001">
          <div className="item">
            <FaGithub />
          </div>
        </a>
      </div>
      <p>Copyright @ Rahul Sharma</p>
    </div>
  );
};

export default Contact;
