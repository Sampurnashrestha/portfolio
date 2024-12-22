import React from 'react'
import "./App.css";
import img2 from "./image/amo.jpg";
import img3 from "./image/html.png";
import img4 from "./image/css.png";
import img5 from "./image/js.png";
import img6 from "./image/java.png";
import img7 from "./image/react.png";

function About() {
  return (
   <>
   <div id="About" className="about">
        <div className="intro">
          <h2>About me:</h2>
          <div className="para">
            <p>
              I'm <b>Sampurna Shrestha</b>, currently studying
              <b>Bachelor's in Computer System and Internet Technology (BCSIT)
              </b>. I’m passionate about technology, especially web development and
              programming, and love diving into coding challenges.
            </p><br />
            <p>
              My skills include <b>HTML, CSS, JavaScript, Java,</b> and
              <b> ReactJS</b>, and I’m always striving to improve and stay
              updated with the latest tools and techniques. I enjoy exploring
              new technologies and solving problems creatively, with the goal of
              making a positive impact in the tech world through my work.
            </p>
          </div>
          <div className="framework">
            <p>Framework</p>
            <div className="framework_logo">
              <img src={img3}></img>
              <img src={img4}></img>
              <img src={img5}></img>
              <img src={img6}></img>
              <img src={img7}></img>
            </div>
          </div>
        </div>

        <img src={img2} className="about-image"></img>
      </div>
   </>
  )
}

export default About
