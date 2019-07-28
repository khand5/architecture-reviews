import React from "react";
import "./App.css";

import Clock from "./components/Clock/Clock";
import LoginPanel from "./components/Panels/Login/LoginPanel";
import ProfilePanel from "./components/Panels/ProfilePanel/ProfilePanel";
import ChessboardContainer from "./components/ChessboardContainer/ChessboardContainer";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <body className="App-body">
        <ProfilePanel />
        <Clock />
        {/* <ChessboardContainer /> */}
        <LoginPanel />
      </body>
      <Footer />
    </div>
  );
}

export default App;
