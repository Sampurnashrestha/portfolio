import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import error_img from "./image/error.png";

function Error() {
  return (
    <>
      <Nav />
      <div className="error">
        <img src={error_img} className="error_img"/>
      </div>
      <Footer />
    </>
  );
}

export default Error;
