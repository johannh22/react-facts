import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function PrimeiroComponente() {
  return (
    <div>
      <img src="./logo512.png" alt="react-logo" width="100px" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<PrimeiroComponente />, document.getElementById("root"));
