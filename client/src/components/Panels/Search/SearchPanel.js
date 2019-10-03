import React from "react";
import "./SearchPanel.css";

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Search-panel">
        <div className="Search-panel-search">
          <input
            type="text"
            className="Search-panel-search-textfield"
            placeholder="Search..."
          ></input>
          <a className="Search-panel-search-button" href="">
            <i className="fa fa-search"></i>
          </a>
        </div>
        <br></br>
        <p>Rating</p>
        <div className="Search-panel-select">
          <select className="Search-panel-select-menu">
            <option value="none">Rating...</option>
            <option value="5">(5) World Wonder</option>
            <option value="4">(4) Majestic</option>
            <option value="3">(3) Excellent</option>
            <option value="2">(2) Great</option>
            <option value="1">(1) Good</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SearchPanel;
