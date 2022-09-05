import React, { useState, createContext } from "react";
import { ControleDeSessao } from "./ControleDeSessao";

export const Context = createContext();

export const UseHookContext = () => {
  const [login, setLogin] = useState(true);

  return (
    <Context.Provider value={[login, setLogin]}>
      {/* <button onClick={() => setLogin(!login)}>Acessar sistema</button> */}
      <br />
      <h1>{login ? "Logada" : "Deslogada"}</h1>
      <ControleDeSessao />
    </Context.Provider>
  );
};
