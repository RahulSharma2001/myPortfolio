import React from "react";
import inten from "../resume/inten.pdf";

const Experience = () => {
  return (
    <div className="ex_container" id="experience">
      <h1>Experience</h1>
      <div className="experience-data-container">
        <div className="experience-data">
          <div>
            <a href="">
              <img
                className="expimg"
                src="https://www.webhopers.com/wp-content/uploads/2021/05/MERN-Stack-Development-Company.png"
                alt=""
              />
            </a>
          </div>
          <div className="details">
            <h2></h2>
            <p>Full Stack Development Bootcamp</p>
            <p>
              <span style={{ color: "blue" }}>Tech Learned</span> ReactJs Node
              MongoDB Express
            </p>
            <div className="project-created">
              <ul>
                <li>
                  <a href="https://sparkly-rabanadas-647002.netlify.app/">
                    Online streaming Application: WatchX
                  </a>
                </li>
                <li>
                  <a href="https://6660c3cb4c6bd8767c6dd721--incandescent-capybara-92024e.netlify.app/#footer">
                    Food Delivery Application: FastFood
                  </a>
                </li>
                <li>
                  <a href="https://github.com/RahulSharma2001/blogging-application">
                    Blogging Application Backend
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="experience-data">
          <div>
            <a href="">
              <img
                className="expimg"
                src="https://miro.medium.com/v2/resize:fit:650/1*EZn2o1HupExZVxDouzvWjQ.jpeg"
                alt=""
              />
            </a>
          </div>
          <div className="details">
            <h2>Full Stack Development </h2>
            <p>Bharat Intern</p>
            <p>
              <span style={{ color: "rgb(102, 99, 99)", fontWeight: "500" }}>
                Tech Learned
              </span>
              HTML, CSS, JAVASCRIPT, NODE JS, Express, Socket IO, MongoDB
            </p>
            <div className="project-created">
              <ul>
                <li>
                  <a href="https://github.com/RahulSharma2001/BlogG">
                    Blog Website (BlogG)
                  </a>
                </li>
                <li>
                  <a href="https://github.com/RahulSharma2001/Task">
                    RealTime Application(Tasker)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="experience-data">
          <div>
            <a href="">
              <img
                className="expimg"
                src="https://miro.medium.com/v2/resize:fit:650/1*EZn2o1HupExZVxDouzvWjQ.jpeg"
                alt=""
              />
            </a>
          </div>
          <div className="details">
            <h2>Web & Android development</h2>
            <p>Netcamp Solutions Private Limited</p>
            <p>
              <span style={{ color: "blue" }}>Tech Learned </span>HTML CSS
              JAVASCRIPT PHP JAVA SQL
            </p>
            <div className="project-created">
              <ul>
                <li>
                  <a href="">Wi-Fi apk, authentication app etc</a>
                </li>
                <li>
                  <a href="https://github.com/RahulSharma2001">
                    Web App Socialhub
                  </a>
                </li>
                <li>
                  <a href={inten}>
                    <button className="certi">All Certificates</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
