import React from "react";
import "./RegistrationPanel.css";

class RegistrationPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="RegistrationPanel-container">
        <form action="">
          <p className="RegistrationPanel-title">New User Registration Form:</p>
          <p className="RegistrationPanel-label">Username:</p>
          <input type="text" name="Username" />
          <p className="RegistrationPanel-label">Password:</p>
          <input type="password" name="Password" />
          <p className="RegistrationPanel-label">First Name:</p>
          <input type="text" name="FirstName" />
          <p className="RegistrationPanel-label">Last Name:</p>
          <input type="text" name="LastName" />
          <p className="RegistrationPanel-label">Email Address:</p>
          <input type="email" name="Email" />
          <p className="RegistrationPanel-label">Date of Birth:</p>
          <input type="date" name="DateOfBirth" />

          <div className="RegistrationPanel-highlightedbox">
            <p className="RegistrationPanel-label">
              Highest Level of Education:
            </p>
            <select list="Education" name="education">
              <option value="PhD">PhD</option>
              <option value="Masters">Masters</option>
              <option value="Bachelors">Bachelors</option>
              <option value="HighSchool">HighSchool</option>
              <option value="Ecumenic">Ecumenic</option>
              <option value="Autodidact">Autodidact</option>
            </select>
          </div>

          <div className="RegistrationPanel-highlightedbox">
            <p className="RegistrationPanel-label">Primary area of interest:</p>
            <input type="radio" name="PrimaryUsage1" value="Academic" />
            Academic
            <input type="radio" name="PrimaryUsage2" value="Research" />
            Research
            <input type="radio" name="PrimaryUsage" value="Other" />
            Other
          </div>

          <div className="RegistrationPanel-highlightedbox">
            <p className="RegistrationPanel-label">
              Preferred Method of Communication?:
            </p>
            <input type="checkbox" name="Communication1" value="GARPlatform" />
            Global Architecture Reviews
            <input type="checkbox" name="Communication2" value="Email" />
            Email
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationPanel;
