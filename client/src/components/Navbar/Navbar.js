import React from "react";

import LoginPanel from "../Panels/LoginPanel/LoginPanel";
import "./Navbar.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginHover: false,
      userIsLoggedIn: false
    };
  }

  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-title">
          <h1>Global Architecture Council</h1>
        </div>
        <div className="Navbar-container">
          <div className="Navbar-item Navbar-item-left Hover">Submit</div>
          <div className="Navbar-item Navbar-item-left Hover">Browse</div>

          <div className="Navbar-item-dropdown Hover">
            <div className="Navbar-item-dropdown-button">
              Categories <i className="fa fa-angle-down"></i>
            </div>
            <div className="Navbar-item-dropdown-content Hover">
              <a href=""> ★ ★ ★ ★ ★</a>
              <a href=""> ★ ★ ★ ★</a>
              <a href=""> ★ ★ ★</a>
              <a href=""> ★ ★</a>
              <a href=""> ★</a>
              <a href=""> Unrated</a>
            </div>
          </div>

          <div className="Navbar-item-search Hover">
            <input
              type="text"
              className="Navbar-item-search-bar"
              placeholder="Search.."
            ></input>
            <a className="Navbar-item-search-button" href="">
              <i className="fa fa-search"></i>
            </a>
          </div>

          <div className="Navbar-item-rating"></div>
          <div
            className="Navbar-item Navbar-item-right Hover"
            onClick={() =>
              this.setState({ loginHover: !this.state.loginHover })
            }
            style={{
              background: this.state.loginHover ? "grey" : "none"
            }}
          >
            Login
          </div>
          {this.state.loginHover && (
            <div className="Navbar-login-panel">
              <LoginPanel />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
