import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Footer-container">
        <div className="Footer-item-left">
          <p className="Footer-item">Browswer: </p>
          <p className="Footer-item">Time:</p>
          <p className="Footer-item">Statistic:</p>
        </div>
        <div className="Footer-item-left">
          <p className="Footer-item">Footer Item 1</p>
          <p className="Footer-item">Footer Item 2</p>
        </div>
        <div className="Footer-item-right">
          <p className="Footer-item">Footer Item 3</p>
          <p className="Footer-item">Another Footer Item</p>
          <p className="Footer-item">Copyright @ LionSide Project</p>
        </div>
      </div>
    );
  }
}

export default Footer;
