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
          <div className="Navbar-item Navbar-item-left Hover">Secular</div>
          <div className="Navbar-item Navbar-item-left Hover">Religious</div>
          <div className="Navbar-item Navbar-item-left Hover">Traditional</div>

          {/* Search Bar */}
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

          <div className="Navbar-item Navbar-item-left">OR</div>

          <select className="Navbar-item-select">
            <option value="none">Rating...</option>
            <option value="5">(5) World Wonder</option>
            <option value="4">(4) Majestic</option>
            <option value="3">(3) Excellent</option>
            <option value="2">(2) Great</option>
            <option value="1">(1) Good</option>
          </select>

          <div className="Navbar-item-rating"></div>
          <div className="Navbar-item Navbar-item-right Hover">Login</div>
        </div>
      </div>
    );
  }
}

export default Header;
