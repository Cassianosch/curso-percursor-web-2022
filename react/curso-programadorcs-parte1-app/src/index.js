// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
const React = require("react");
const ReactDOM = require("react-dom/client");

const Banner = () => {
  return <h1>Cassiano</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Banner />
    {/* <h1>Programador CS</h1>
    <h2>Curso de React</h2> */}
  </div>
);
