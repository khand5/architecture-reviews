import React from "react";
import "./ProfilePanel.css";

class ProfilePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="ProfilePanel-container" draggable="true">
        {" "}
        <p className="ProfilePanel-title">Profile Panel</p>
        <p class="ProfilePanel-item">Username: _Alchemist</p>
        <p class="ProfilePanel-item">Status: _Offline</p>
        <p class="ProfilePanel-item">Wins: 12</p>
        <p class="ProfilePanel-item">Losses: 0</p>
        <p class="ProfilePanel-item">LastPlayed: _Whirlwind</p>
      </div>
    );
  }
}

export default ProfilePanel;
