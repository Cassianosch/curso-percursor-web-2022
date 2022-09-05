import React from "react";

export const SpreadOperator = () => {
  let arrayInicial = [0, 1, 2];
  console.log("====================================");
  console.log(arrayInicial);
  console.log("====================================");

  // let arrayModificado = [...arrayInicial, 3];
  let arrayModificado = [3, ...arrayInicial];

  console.log("====================================");
  console.log(arrayModificado);
  console.log("====================================");

  return null;
};
