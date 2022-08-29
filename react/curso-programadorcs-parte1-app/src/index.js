import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import Banner, { Banner2 } from "./Banner";

const root = ReactDOM.createRoot(document.getElementById("root"));

const dadosUsuario = {
  nome: "Cassiano",
  idade: 36,
};

root.render(
  <div>
    <Banner {...dadosUsuario} />
    {/* <Banner2 /> */}
    {/* <h1>Programador CS</h1>
    <h2>Curso de React</h2> */}
  </div>
);
