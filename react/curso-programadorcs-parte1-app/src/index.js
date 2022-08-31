import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import Banner, { Banner2 } from "./Banner";
import { UseState } from "./hooks/UseState";

const root = ReactDOM.createRoot(document.getElementById("root"));

const dadosUsuario = {
  nome: "Cassiano",
  // idade: 36,
};

root.render(
  <div>
    {/* <Banner {...dadosUsuario} /> */}
    {/* <Banner2 /> */}
    <UseState />
  </div>
);
