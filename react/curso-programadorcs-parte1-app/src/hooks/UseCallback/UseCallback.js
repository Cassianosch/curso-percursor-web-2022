import React, { useState, useCallback, useEffect } from "react";

export const UseCallback = () => {
  const [pessoa, setPessoa] = useState({
    nome: "Cassiano",
    idade: 35,
  });
  const [idade, setIdade] = useState(36);

  const gerenciarIdade = () => {
    setPessoa({ nome: "Programador CS", idade: idade });
  };
  // const gerenciarIdade = useCallback(() => {
  //   setPessoa({ nome: "Programador CS", idade: idade });
  // }, [idade]);

  useEffect(() => {
    console.log("====================================");
    console.log("pessoa", pessoa);
    console.log("====================================");
  }, [pessoa]);

  useEffect(() => {
    console.log("====================================");
    console.log("idade", idade);
    console.log("====================================");
  }, [idade]);

  return (
    <>
      <button onClick={() => gerenciarIdade()}>Aumentar idade da pessoa</button>
      <button onClick={() => setIdade(37)}>Aumentar state idade</button>
    </>
  );
};
