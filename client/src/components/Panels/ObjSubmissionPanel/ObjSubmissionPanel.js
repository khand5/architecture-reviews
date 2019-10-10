import React from "react";
import "./ObjSubmissionPanel.css";

class ObjSubmissionPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ObjSubmissionPanel-container">
        <form action="">
          <p className="ObjSubmissionPanel-title">
            New Object Submission Form:
          </p>
          <p className="ObjSubmissionPanel-label">Name of Architecture:</p>
          <input type="text" name="ObjectName" />
          <p className="ObjSubmissionPanel-label">Description/Review:</p>
          <textarea type="text" name="Description" />
          <p className="ObjSubmissionPanel-label">Latitude:</p>
          <input type="number" name="Username" />
          <p className="ObjSubmissionPanel-label">Latitude:</p>
          <input type="number" name="Username" />
          <p className="ObjSubmissionPanel-label">Image:</p>
          <input type="file" name="Username" />
          <input type="submit" name="Username" />
        </form>
      </div>
    );
  }
}

export default ObjSubmissionPanel;
