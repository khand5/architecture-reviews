import React from "react";
import "./LoginPanel.css";

class LoginPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="Panel-container">
        <p className="Panel-title">Login</p>
        <p className="Panel-username-label">Username:</p>
        <input type="text" name="Username" />
        <p className="Panel-username-label">Password:</p>
        <input type="text" name="Password" />
      </div>
    );
  }
}

export default LoginPanel;
