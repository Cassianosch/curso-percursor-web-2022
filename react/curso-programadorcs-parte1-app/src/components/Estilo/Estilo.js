import React from "react";
// import "./estilo.css";
import "./estilo.scss";
import styled from "styled-components";

const Button = styled.button`
  background-color: orange;
  color: deepskyblue;
  font-size: 30px;
`;
const ContainerGeral = styled.div`
  background-color: ${(p) => p.corDoBackground};
`;

export const Estilo = () => {
  return (
    <ContainerGeral corDoBackground="#cecece">
      <div className="div-geral">
        <h1 className="titulo-h1">Programador.cs</h1>
        <h1
          style={{
            backgroundColor: "yellow",
            color: "red",
            fontSize: 35,
          }}
        >
          Programador.cs
        </h1>
        <Button>Programador.cs</Button>
      </div>
    </ContainerGeral>
  );
};
