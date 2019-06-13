import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

import Form from "./form/Form";

function App() {
  return (
    <div className="col-sm-6">
      <h3>React Validation with validator npm </h3>
      <Form />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
