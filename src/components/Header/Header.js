import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsLoggedIn: false
    };
  }

  render() {
    return (
      <div className="Navbar-container">
        <div className="Navbar-item-left">One</div>
        <div className="Navbar-item-left">Two</div>
        <div className="Navbar-item-left">Three</div>
        <div className="Navbar-item-right">Right</div>
        <div className="Navbar-item-left">Right</div>
      </div>
    );
  }
}

export default Header;
