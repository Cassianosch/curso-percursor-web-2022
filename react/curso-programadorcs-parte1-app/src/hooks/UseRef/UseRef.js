import React, { useRef } from "react";

export const UseRef = () => {
  const elementoInput = useRef(null);

  const focoNoInput = () => {
    elementoInput.current.focus();
    elementoInput.current.value = 2;
  };

  return (
    <>
      <input type="text" ref={elementoInput} />
      <button onClick={() => focoNoInput()}>Focar no input</button>
    </>
  );
};
