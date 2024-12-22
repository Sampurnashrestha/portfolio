import React from 'react';
import "./App.css";
import img1 from "./image/myphoto.jpg";

function Home() {
  return (
    <>
    <div id="Home">
        <div className="home">
          <div className="info">
            <h1>
              Sampurna
              <br /> Shrestha
            </h1>
            <p>
              I'm <b>Sampurna Shrestha</b>, currently pursuing a degree in
              <br />
              <b>
                BCSIT (Bachelor in Computer Systems and Internet Technology)
              </b>
              .
            </p>
          </div>
          <div className="image-container">
            <img src={img1} width="200px" height="200px"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
