import React from "react";
import "./VideoPlayer.css";

import kazanCathedral from "../../coverage/kazanCathedral.mp4";
import moscow from "../../coverage/moscow.mp4";

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="VideoPlayer-container">
        <video width="100%" autoPlay muted loop playsinline>
          <source src={moscow} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
