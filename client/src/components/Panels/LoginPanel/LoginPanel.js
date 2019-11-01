import React from "react";
import "./LoginPanel.css";

class LoginPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      usernameEmpty: false,
      passwordEmpty: false
    };
  }

  validate = () => {
    this.setState({
      usernameEmpty: this.state.username.length === 0,
      passwordEmpty: this.state.password.length === 0
    });
  };

  render() {
    return (
      <div class="Panel-container">
        <p className="Panel-title">Login</p>
        <p className="Panel-username-label">Username:</p>
        <input
          type="text"
          name="Username"
          value={this.state.username}
          onChange={e => {
            this.setState({ username: e.target.value });
            this.validate();
          }}
        />
        {this.state.usernameEmpty && (
          <div className="Panel-error">Username is empty.</div>
        )}
        <p className="Panel-username-label">Password:</p>
        <input
          type="password"
          name="Password"
          value={this.state.password}
          onChange={e => {
            this.setState({ password: e.target.value });
            this.validate();
          }}
        />
        {this.state.passwordEmpty && (
          <div className="Panel-error">Password is empty.</div>
        )}
        <br />
        <input type="submit" value="Register" onCLick={this.validate} />
        <input type="submit" value="Login" onClick={this.validate} />
        <br />
        <a className="Panel-forgotpassword-a" href="/forgotPassword">
          Forgot Password?
        </a>
      </div>
    );
  }
}

export default LoginPanel;
