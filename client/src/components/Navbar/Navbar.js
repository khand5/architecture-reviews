import React from "react";
import "./Navbar.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsLoggedIn: false
    };
  }

  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-title">
          <h1>Global Architecture Reviews</h1>
        </div>
        <div className="Navbar-container">
          <div className="Navbar-item Navbar-item-left Hover-highlight-border-bottom">
            Secular
          </div>
          <div className="Navbar-item Navbar-item-left Hover-highlight-border-bottom">
            Religious
          </div>
          <div className="Navbar-item Navbar-item-left Hover-highlight-border-bottom">
            Traditional
          </div>

          <div className="Navbar-item-search Hover-highlight-border-bottom">
            <input
              type="text"
              className="Navbar-item-search-bar"
              placeholder="Search.."
            ></input>
            <i className="Navbar-item-search-button fa fa-search"></i>
          </div>

          <div className="Navbar-item Navbar-item-right Hover-highlight-border-bottom">
            Login
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
