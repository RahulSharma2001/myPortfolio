import React from "react";
import resume from "../resume/rahul_sharma_resume.pdf";
import hero from "../assets/hero/hero.avif";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Home = () => {
  const [text] = useTypewriter({
    words: ["Fullstack Developer", "passionate developer", "Coder"],
    loop: {},
  });
  return (
    <div className="container home" id="home">
      <div className="left">
        <h1>
          Hii, I'm Rahul, A <span style={{ fontWeight: "bold" }}>{text}</span>
          <Cursor />
        </h1>
        <a
          href={resume}
          download="rahul_resume"
          className="btn btn-outline-warning"
        >
          Download Resume
        </a>
      </div>
      <div className="right">
        <div className="img">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
