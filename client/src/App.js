import React from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPanel from "./components/Panels/LoginPanel/LoginPanel";
import ObjectPanel from "./components/Panels/ObjectPanel/ObjectPanel";
import RegistrationPanel from "./components/Panels/RegistrationPanel/RegistrationPanel";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <LoginPanel /> */}

      <RegistrationPanel />

      {/* <ObjectPanel /> */}

      {/* <body className="App-body">
        <Object />
        <Object />
        <Object />
        <Object />
        <Object />
        <Object />
        <Object />
      </body> */}
      <Footer />
    </div>
  );
}

export default App;
