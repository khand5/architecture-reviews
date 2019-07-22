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
      <div className="Navbar-container">
        <div className="Navbar-item Navbar-item-left">Company</div>
        <div className="Navbar-item Navbar-item-left">Highscores</div>
        <div className="Navbar-item Navbar-item-right">Login</div>
      </div>
    );
  }
}

export default Header;
