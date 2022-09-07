import React, { useState } from "react";

export const Formulario = () => {
  const [nome, setNome] = useState("");

  const handleEvent = (evento) => {
    console.log("====================================");
    console.log(evento.target.value);
    console.log("====================================");
    setNome(evento.target.value);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log("====================================");
    console.log(`Evento submitado, com o valor: ${nome}`);
    console.log("====================================");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            autoComplete="off"
            value={nome}
            onChange={handleEvent}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};
