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
        <div className="Footer-logo">
          <i className="Footer-logo-icon fa fa-cogs"></i>
          <i className="Footer-logo-icon fa fa-globe"></i>
          <i className="Footer-logo-icon fa fa-briefcase"></i>
          <i className="Footer-logo-icon fa fa-flask"></i>
          <i className="Footer-logo-icon fa fa-magic"></i>
          <i className="Footer-logo-icon fa fa-bolt"></i>
          <i className="Footer-logo-icon fa fa-sitemap"></i>
          <i className="Footer-logo-icon fa fa-male"></i>
          <i className="Footer-logo-icon fa fa-snowflake-o"></i>

          <i className="Footer-logo-icon fa fa-rebel"></i>
          <i className="Footer-logo-icon fa fa-empire"></i>
          <p className="Footer-logo-caption">
            ©2019 Department of Computing & Software
          </p>
        </div>
        <div className="Footer-container">
          <div className="Footer-item-left">
            <p className="Footer-item">Contact </p>
            <p className="Footer-item">Terms & Conditions</p>
            <p className="Footer-item">Privacy Policy</p>
          </div>
          <div className="Footer-item-left">
            <p className="Footer-item">Social Media Links:</p>
            <i className="Footer-item fa fa-instagram"></i>
            <i className="Footer-item fa fa-twitter"></i>
            <i className="Footer-item fa fa-facebook"></i>
            <i className="Footer-item fa fa-linkedin"></i>
            <i className="Footer-item fa fa-youtube"></i>
          </div>
          <div className="Footer-item-right">
            <p className="Footer-item">Department of Computing & Software</p>
            <p className="Footer-item">1280 Main Street West</p>
            <p className="Footer-item">Hamilton, Ontario, L8S 4L8 </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
