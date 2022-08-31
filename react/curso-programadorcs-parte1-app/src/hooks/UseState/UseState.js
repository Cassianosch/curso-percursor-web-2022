import React, { useState } from "react";

export const UseState = () => {
  const [contador, setContador] = useState(0);

  return (
    <>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar valor do contador
      </button>
    </>
  );
};
