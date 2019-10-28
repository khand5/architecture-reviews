import React from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { NavLink, Router, Route } from "react-router-dom";
import rootStore from "./stores/RootStore";
import { Provider } from "mobx-react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPanel from "./components/Panels/LoginPanel/LoginPanel";
import ObjectPanel from "./components/Panels/ObjectPanel/ObjectPanel";
import RegistrationPanel from "./components/Panels/RegistrationPanel/RegistrationPanel";
import ObjSubmissionPanel from "./components/Panels/ObjSubmissionPanel/ObjSubmissionPanel";
import ObjSummaryPanel from "./components/Panels/ObjSummaryPanel/ObjSummaryPanel";
import SearchResultsPanel from "./components/Panels/SearchResultsPanel/SearchResultsPanel";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <div className="App">
      <Provider rootStore={rootStore}>
        <Router history={rootStore.history}>
          <Navbar />
          <Route path="/login" component={LoginPanel} />
          <Route path="/sampleresultspage" component={SearchResultsPanel} />
          <Route path="/sampleindividualobjectpage" component={ObjectPanel} />
          <Route path="/objectsubmissionpage" component={ObjSubmissionPanel} />
          <Route path="/userregistration" component={RegistrationPanel} />
          <Route path="/objectsummarypanel" component={ObjSummaryPanel} />
          <Route path="/videoplayer" component={VideoPlayer} />
          FOR CONVIENIENCE ONLY: <br></br>
          (Note: The SearchForm is included in NavBar)<br></br>
          <NavLink to="/login">
            [login] <br></br>
          </NavLink>
          <NavLink to="/sampleresultspage">
            [searchform **Note: see navbar] <br></br>
          </NavLink>
          <NavLink to="/sampleresultspage">
            [sample-results-page] <br></br>
          </NavLink>
          <NavLink to="/sampleindividualobjectpage">
            [sample-individual-object-page]<br></br>
          </NavLink>
          <NavLink to="/objectsubmissionpage">
            [object-submission-page]<br></br>
          </NavLink>
          <NavLink to="/userregistration">
            [user-registration]<br></br>
          </NavLink>
          <NavLink to="/userprofile">
            [user-profile]<br></br>
          </NavLink>
          <NavLink to="/objectsummarypanel">
            [object-summary-panel]<br></br>
          </NavLink>
          <NavLink to="/videoplayer">
            [video-player]<br></br>
          </NavLink>
          <br />
          <a href="https://architecture-reviews.herokuapp.com/">
            [current-production-build-link-to-Heroku]
          </a>
          <div className="App-body"></div>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
