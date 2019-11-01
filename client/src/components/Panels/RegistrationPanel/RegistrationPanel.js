import React from "react";
import "./RegistrationPanel.css";

class RegistrationPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      usernameEmpty: false,
      password: "",
      passwordEmpty: false,
      firstName: "",
      firstNameEmpty: false,
      lastName: "",
      lastNameEmpty: false,
      email: "",
      emailEmpty: false,
      dob: "yyyy-mm-dd",
      dobEmpty: false,
      interest: "Academic",
      interestEmpty: false
    };
  }

  validate = () => {
    this.setState({
      usernameEmpty: this.state.username.length === 0,
      passwordEmpty: this.state.password.length === 0,
      firstNameEmpty: this.state.firstName.length === 0,
      lastNameEmpty: this.state.lastName.length === 0,
      emailEmpty: this.state.email.length === 0,
      dobEmpty:
        this.state.dob.length === 0 ||
        !/^\d\d\d\d-\d\d-\d\d$/.test(this.state.dob),
      interestEmpty: this.state.interest.length === 0
    });
  };

  render() {
    return (
      <div className="RegistrationPanel-container">
        <form action="">
          <p className="RegistrationPanel-title">New User Registration Form:</p>
          <p className="RegistrationPanel-label">Username:</p>
          <input
            type="text"
            name="Username"
            value={this.state.username}
            onChange={e => {
              this.setState({ username: e.target.value });
            }}
          />
          <p className="RegistrationPanel-label">Password:</p>
          <input type="password" name="Password" />
          <p className="RegistrationPanel-label">First Name:</p>
          <input
            type="text"
            name="FirstName"
            value={this.state.firstName}
            onChange={e => {
              this.setState({ firstName: e.target.value });
            }}
          />
          <p className="RegistrationPanel-label">Last Name:</p>
          <input
            type="text"
            name="LastName"
            value={this.state.lastName}
            onChange={e => {
              this.setState({ lastName: e.target.value });
            }}
          />
          <p className="RegistrationPanel-label">Email Address:</p>
          <input
            type="email"
            name="Email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <p className="RegistrationPanel-label">Date of Birth:</p>
          <input
            type="date"
            name="DateOfBirth"
            value={this.state.dob}
            onChange={e => this.setState({ dob: e.target.value })}
          />

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
            <input
              type="radio"
              name="PrimaryUsage1"
              value="Academic"
              checked={this.state.interest === "Academic"}
              onClick={() => this.setState({ interest: "Academic" })}
            />
            Academic
            <input
              type="radio"
              name="PrimaryUsage2"
              value="Research"
              checked={this.state.interest === "Research"}
              onClick={() => this.setState({ interest: "Research" })}
            />
            Research
            <input
              type="radio"
              s
              name="PrimaryUsage"
              value="Other"
              checked={this.state.interest === "Other"}
              onClick={() => this.setState({ interest: "Other" })}
            />
            Other
          </div>

          <div className="RegistrationPanel-highlightedbox">
            <p className="RegistrationPanel-label">
              Preferred Method of Communication?:
            </p>
            <input type="checkbox" name="Communication1" value="GARPlatform" />
            Global Architecture Council
            <input type="checkbox" name="Communication2" value="Email" />
            Email
          </div>
          {this.state.username && (
            <div className="Panel-error">Username is empty</div>
          )}
          {this.state.username && (
            <div className="Panel-error">Username is empty</div>
          )}
          {this.state.username && (
            <div className="Panel-error">Username is empty</div>
          )}
          {this.state.username && (
            <div className="Panel-error">Username is empty</div>
          )}
          {this.state.usernameEmpty && (
            <div className="Panel-error">Username is empty</div>
          )}
          {this.state.passwordEmpty && (
            <div className="Panel-error">Password is empty</div>
          )}
          {this.state.firstNameEmpty && (
            <div className="Panel-error">First Name is empty</div>
          )}
          {this.state.lastNameEmpty && (
            <div className="Panel-error">Last Name is empty</div>
          )}
          {this.state.emailEmpty && (
            <div className="Panel-error">Email is empty</div>
          )}
          {this.state.dobEmpty && (
            <div className="Panel-error">Date of birth is invalid</div>
          )}
          {this.state.interestEmpty && (
            <div className="Panel-error">Interest is empty</div>
          )}
          <input
            type="submit"
            value="Submit"
            onClick={e => {
              e.preventDefault();
              this.validate();
            }}
          />
        </form>
      </div>
    );
  }
}

export default RegistrationPanel;
