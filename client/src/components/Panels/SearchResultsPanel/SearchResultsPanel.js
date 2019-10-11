import React from "react";
import "./SearchResultsPanel.css";
import cathedral from "../ObjectPanel/cathedral.jpeg";

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
              ></iframe>
              <a href="https://www.embedgooglemap.net/blog/elementor-pro-discount-code-review/"></a>
            </div>
          </div>
        </div>

        <div className="SearchResultsPanel-results-container">
          <div
            className="SearchResultsPanel-imagecontainer"
            background="../ObjectPanel/cathedral.jpeg"
          >
            <div className="SearchResultsPanel-image-position">A</div>
            <div className="SearchResultsPanel-image-title">
              Caterbury Cathedral
            </div>
            <div className="SearchResultsPanel-image-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              metus placerat, ullamcorper lectus mollis, bibendum leo...
            </div>
            <div className="SearchResultsPanel-image-rating">
              Category: ★★★★
            </div>
            <div className="SearchResultsPanel-image-average">
              Average: 8.2/10
            </div>
          </div>

          <div
            className="SearchResultsPanel-imagecontainer"
            background="../ObjectPanel/cathedral.jpeg"
          >
            <div className="SearchResultsPanel-image-position">A</div>
            <div className="SearchResultsPanel-image-title">
              Caterbury Cathedral
            </div>
            <div className="SearchResultsPanel-image-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              metus placerat, ullamcorper lectus mollis, bibendum leo...
            </div>
            <div className="SearchResultsPanel-image-rating">
              Category: ★★★★
            </div>
            <div className="SearchResultsPanel-image-average">
              Average: 8.2/10
            </div>
          </div>

          <div
            className="SearchResultsPanel-imagecontainer"
            background="../ObjectPanel/cathedral.jpeg"
          >
            <div className="SearchResultsPanel-image-position">A</div>
            <div className="SearchResultsPanel-image-title">
              Caterbury Cathedral
            </div>
            <div className="SearchResultsPanel-image-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              metus placerat, ullamcorper lectus mollis, bibendum leo...
            </div>
            <div className="SearchResultsPanel-image-rating">
              Category: ★★★★
            </div>
            <div className="SearchResultsPanel-image-average">
              Average: 8.2/10
            </div>
          </div>

          <div
            className="SearchResultsPanel-imagecontainer"
            background="../ObjectPanel/cathedral.jpeg"
          >
            <div className="SearchResultsPanel-image-position">A</div>
            <div className="SearchResultsPanel-image-title">
              Caterbury Cathedral
            </div>
            <div className="SearchResultsPanel-image-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              metus placerat, ullamcorper lectus mollis, bibendum leo...
            </div>
            <div className="SearchResultsPanel-image-rating">
              Category: ★★★★
            </div>
            <div className="SearchResultsPanel-image-average">
              Average: 8.2/10
            </div>
          </div>

          <div
            className="SearchResultsPanel-imagecontainer"
            background="../ObjectPanel/cathedral.jpeg"
          >
            <div className="SearchResultsPanel-image-position">A</div>
            <div className="SearchResultsPanel-image-title">
              Caterbury Cathedral
            </div>
            <div className="SearchResultsPanel-image-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              metus placerat, ullamcorper lectus mollis, bibendum leo...
            </div>
            <div className="SearchResultsPanel-image-rating">
              Category: ★★★★
            </div>
            <div className="SearchResultsPanel-image-average">
              Average: 8.2/10
            </div>
          </div>

          <div
            className="SearchResultsPanel-imagecontainer"
            background="../ObjectPanel/cathedral.jpeg"
          >
            <div className="SearchResultsPanel-image-position">A</div>
            <div className="SearchResultsPanel-image-title">
              Caterbury Cathedral
            </div>
            <div className="SearchResultsPanel-image-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              metus placerat, ullamcorper lectus mollis, bibendum leo...
            </div>
            <div className="SearchResultsPanel-image-rating">
              Category: ★★★★
            </div>
            <div className="SearchResultsPanel-image-average">
              Average: 8.2/10
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResultsPanel;
