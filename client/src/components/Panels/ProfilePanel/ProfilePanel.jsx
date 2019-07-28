import React from "react";
import "./ProfilePanel.css";

class ProfilePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ProfilePanel-container">
        <p className="ProfilePanel-title">Profile Panel</p>
        <p className="ProfilePanel-item">Username: _Alchemist</p>
        <p className="ProfilePanel-item">Status: _Offline</p>
        <p className="ProfilePanel-item">Wins: 12</p>
        <p className="ProfilePanel-item">Losses: 0</p>
        <p className="ProfilePanel-item">LastPlayed: _Whirlwind</p>
      </div>
    );
  }
}

export default ProfilePanel;
