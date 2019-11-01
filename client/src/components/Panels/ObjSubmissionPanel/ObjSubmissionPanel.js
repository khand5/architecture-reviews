import React from "react";
import "./ObjSubmissionPanel.css";

class ObjSubmissionPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOfArchitecture: "",
      nameOfArchitectureInvalid: false,
      description: "",
      descriptionInvalid: false,
      latitude: 0,
      latitudeInvalid: false,
      longitude: 0,
      longitudeInvalid: false,
      imageFile: undefined,
      imageFileInvalid: false
    };
  }

  validate = () => {
    console.log(this.state.latitude);
    this.setState({
      nameOfArchitectureInvalid: this.state.nameOfArchitecture.length === 0,
      descriptionInvalid: this.state.description.length === 0,
      latitudeInvalid: this.state.latitude < -90 || this.state.latitude > 90,
      longitudeInvalid: this.state.longitude < -90 || this.state.longitude > 90,
      imageFileInvalid: this.state.imageFile === undefined
    });
  };

  render() {
    return (
      <div className="ObjSubmissionPanel-container">
        <form action="">
          <p className="ObjSubmissionPanel-title">
            New Object Submission Form:
          </p>
          <p className="ObjSubmissionPanel-label">Name of Architecture:</p>
          <input
            type="text"
            name="ObjectName"
            value={this.state.nameOfArchitecture}
            onChange={e =>
              this.setState({ nameOfArchitecture: e.target.value })
            }
          />
          <p className="ObjSubmissionPanel-label">Description/Review:</p>
          <textarea
            type="text"
            name="Description"
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
          />
          <p className="ObjSubmissionPanel-label">Latitude:</p>
          <input
            type="number"
            name="Latitude"
            value={this.state.latitude}
            onChange={e => this.setState({ latitude: Number(e.target.value) })}
          />
          <p className="ObjSubmissionPanel-label">Longitude:</p>
          <input
            type="number"
            name="Longitude"
            value={this.state.longitude}
            onChange={e => this.setState({ longitude: Number(e.target.value) })}
          />
          <p className="ObjSubmissionPanel-label">Image:</p>
          <input
            type="file"
            name="Image"
            value={this.state.imageFile}
            onChange={e => this.setState({ imageFile: e.target.value })}
          />
        </form>

        {this.state.nameOfArchitectureInvalid && (
          <div className="Panel-error">Name of Architecture empty</div>
        )}
        {this.state.descriptionInvalid && (
          <div className="Panel-error">
            Description/Review of Architecture empty
          </div>
        )}
        {this.state.latitudeInvalid && (
          <div className="Panel-error">
            Invalid latitude. Latitude must bet within [-90,90] range.
          </div>
        )}
        {this.state.longitudeInvalid && (
          <div className="Panel-error">
            Invalid longitude. Longitude mLst bet within [-90,90] range.
          </div>
        )}
        {this.state.imageFileInvalid && (
          <div className="Panel-error">Image file empty.</div>
        )}

        <input
          type="submit"
          value="Submit"
          onClick={e => {
            e.preventDefault();
            this.validate();
          }}
        />
      </div>
    );
  }
}

export default ObjSubmissionPanel;
