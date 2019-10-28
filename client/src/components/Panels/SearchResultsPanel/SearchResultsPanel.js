import React from "react";
import "./SearchResultsPanel.css";

import ObjSummaryPanel from "../ObjSummaryPanel/ObjSummaryPanel";

class SearchResultsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="SearchResultsPanel-container">
        <p className="SearchResultsPanel-title">
          Search Results for "Canterbury Cathedral"
        </p>
        <div className="SearchResultsPanel-Map-container">
          <div className="SearchResultsPanel-gmapcontainer">
            <div className="SearchResultsPanel-gmapcanvas">
              <iframe
                width="100%"
                height="20%"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Caterbury%20Cathedral&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                title="google_maps"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="SearchResultsPanel-results-container">
          <ObjSummaryPanel />

          <ObjSummaryPanel />
          <ObjSummaryPanel />
          <ObjSummaryPanel />
          <ObjSummaryPanel />

          <ObjSummaryPanel />
          <ObjSummaryPanel />
          <ObjSummaryPanel />
        </div>
      </div>
    );
  }
}

export default SearchResultsPanel;
