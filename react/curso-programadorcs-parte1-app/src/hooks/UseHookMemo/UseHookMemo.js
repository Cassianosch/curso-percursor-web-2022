import React, { useState, useMemo } from "react";

export const UseHookMemo = () => {
  const [numero, setNumero] = useState(1);
  const [valor, setValor] = useState(1);
  const [dobrar, setDobrar] = useState(1);

  // const pegarDobro = useMemo(() => funcaoLenta(valor), [valor]);

  return (
    <>
      <h1>Adicionar número</h1>
      <h1>{numero}</h1>
      <button onClick={() => setNumero(numero + 1)}>Adicionar número</button>
      <br />
      <br />
      <h1>Adicionar dobro</h1>
      <h1>{valor}</h1>
      <button onClick={() => setValor(valor + 1)}>Adicionar dobro</button>
      <br />
      <br />
      <h1>Pegar Dobro</h1>
      <h1>{dobrar}</h1>
      <button onClick={() => setDobrar(funcaoLenta(valor))}>Pegar Dobro</button>
      <br />
      <br />
    </>
  );
};

const funcaoLenta = (numero) => {
  console.log("Iniciou função lenta");

  for (let index = 0; index < 1000000000; index++) {}
  const dobro = numero * 2;
  return dobro;
};
