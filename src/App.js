import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
          Weather App{" "}
        | Developed by{" "}
        <a href="https://github.com/smriti2510/">
          Smriti Agarwal
        </a>{" "}
        | Powered by{" "}
        <a  href="https://legacy.reactjs.org/">
          React 
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
