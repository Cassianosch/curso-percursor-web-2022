import React from "react";
import ReactDOM from "react-dom/client";
// import Banner, { Banner2 } from "./Banner";
// import { UseState } from "./hooks/UseState";
// import { UseEffect } from "./hooks/UseEffect";
// import { UseRef } from "./hooks/UseRef";
// import { UseCallback } from "./hooks/UseCallback";
// import { UseHookMemo } from "./hooks/UseHookMemo";
// import { UseHookContext } from "./hooks/UseHookContext";
import { SpreadOperator } from "./components/SpreadOperator";

const root = ReactDOM.createRoot(document.getElementById("root"));

const dadosUsuario = {
  nome: "Cassiano",
  // idade: 36,
};

root.render(
  <div>
    {/* <Banner {...dadosUsuario} /> */}
    {/* <Banner2 /> */}
    {/* <UseState /> */}
    {/* <UseEffect /> */}
    {/* <UseRef /> */}
    {/* <UseCallback /> */}
    {/* <UseHookMemo /> */}
    {/* <UseHookContext /> */}
    <SpreadOperator />
  </div>
);
