import React, { useContext } from "react";
import { Context } from "./UseHookContext";

export const ControleDeSessao = () => {
  const [login, setLogin] = useContext(Context);

  return (
    <>
      <br />
      {/* <h1>{login ? "Logada" : "Deslogada"}</h1> */}
      <button onClick={() => setLogin(!login)}>Acessar sistema</button>
    </>
  );
};
