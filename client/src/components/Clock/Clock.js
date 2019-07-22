import React from "react";
import "./Clock.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="Clock-container">
        <p className="Clock-title">{this.state.date.toDateString()}</p>
        <div className="Clock-container-time">
          {this.state.date.toLocaleTimeString()}
        </div>{" "}
      </div>
    );
  }
}

export default Clock;
