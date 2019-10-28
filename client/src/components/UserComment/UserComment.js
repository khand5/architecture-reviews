import React from "react";
import "./UserComment.css";

// Properties:
// review: string
// username: string
// date: string
// profileImage: string

class UserComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="Sample-review">
          <div className="Sample-review-header">
            <div
              style={{
                backgroundImage: `url(https://randomuser.me/api/portraits/men/82.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%",
                width: "35px",
                height: "35px",
                margin: "10px 0 0 10px"
              }}
            />
            <div
              style={{
                padding: "10px 0 0 10px",
                display: "flex",
                flexFlow: "column",
                textAlign: "left"
              }}
            >
              <span>Haris Khan</span>
              <span style={{ fontSize: "0.8em", color: "gray" }}>
                September 1st, 2019
              </span>
            </div>
            <div className="UserComment-rating">8/10</div>
          </div>
          <div className="Sample-review-body">{this.props.review}</div>
        </div>
      </div>
    );
  }
}

export default UserComment;
