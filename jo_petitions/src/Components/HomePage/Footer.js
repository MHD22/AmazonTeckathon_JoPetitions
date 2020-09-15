import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="main-footer">
      <div className="fotter-container">
        <div className="row">
          <div className="col">
            <h4 className="logo-color">Jo Petitions</h4>
          </div>
          <div className="col">
            <h6>About</h6>
          </div>
          <div className="col">
            <h6>Policies</h6>
          </div>
          <div className="col">
            <h6>Privacy</h6>
          </div>
          <div className="col">
            <h6>Guides</h6>
          </div>
          <div className="col">
            <h6>Team</h6>
          </div>
          <div className="col">
            <h6>Impact</h6>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col-sm">
          {" "}
          &copy;{new Date().getFullYear()} JoPetitions | All right reserved{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
