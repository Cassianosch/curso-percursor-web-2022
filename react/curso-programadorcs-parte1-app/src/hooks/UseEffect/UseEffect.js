import React, { useState, useEffect } from "react";

export const UseEffect = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `O valor é: ${contador}`;
  }, [contador]);

  return (
    <>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar valor do contador
      </button>
    </>
  );
};
