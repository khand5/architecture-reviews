import React from "react";
import "./ObjSummaryPanel.css";

class ObjSummaryPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ObjSummaryPanel-container">
        <div className="ObjSummaryPanel-container-img-container">
          <div className="ObjSummaryPanel-gac">
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star-o"></span>
            <span class="fa fa-star-o"></span>
          </div>
        </div>
        <div className="ObjSummaryPanel-name">Caterbury Cathedral</div>
        <div className="ObjSummaryPanel-location">
          Canterbury, Kent, England
        </div>
        <div className="ObjSummaryPanel-denomination">Church of England</div>

        <div className="ObjSummaryPanel-public">93/100</div>
        <div className="ObjSummaryPanel-submission-author">John Davis</div>
      </div>
    );
  }
}

export default ObjSummaryPanel;
