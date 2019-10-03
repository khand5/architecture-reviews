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
          <div className="Navbar-item Navbar-item-left Hover">Submit</div>
          <div className="Navbar-item Navbar-item-left Hover">Browse</div>

          <div className="Navbar-item-dropdown Hover">
            <div class="Navbar-item-dropdown-button">
              Categories <i className="fa fa-angle-down"></i>
            </div>
            <div class="Navbar-item-dropdown-content">
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
          <div className="Navbar-item Navbar-item-right Hover">Login</div>
        </div>
      </div>
    );
  }
}

export default Header;
