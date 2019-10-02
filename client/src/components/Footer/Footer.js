import React from "react";
import "./Footer.css";
import logo from "./logo.svg";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Footer">
        <div className="Footer-container">
          <div className="Footer-item-left">
            <p className="Footer-item">Contact </p>
            <p className="Footer-item">Terms & Conditions</p>
            <p className="Footer-item">Privacy Policy</p>
            <div className="Footer-container">
              <i className="Footer-item fa fa-instagram"></i>
              <i className="Footer-item Footer-item-left fa fa-twitter"></i>
              <i className="Footer-item Footer-item-left fa fa-facebook"></i>
              <i className="Footer-item Footer-item-left fa fa-linkedin"></i>
              <i className="Footer-item Footer-item-left fa fa-youtube"></i>
            </div>
          </div>
          <div className="Footer-item-right">
            <p className="Footer-item">1280 Main Street West</p>
            <p className="Footer-item">Hamilton, Ontario, L8S 4L8 </p>
            <p className="Footer-item">(905)525-9140 </p>
          </div>
        </div>
        <div className="Footer-logo">
          <i className="Footer-logo-icon fa fa-fire"></i>
          <p className="Footer-logo-caption">©2019 DANISH KHAN</p>
        </div>
      </div>
    );
  }
}

export default Footer;
