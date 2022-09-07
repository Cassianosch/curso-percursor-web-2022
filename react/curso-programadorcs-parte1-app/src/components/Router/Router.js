import React from "react";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./paginas/Menu";
import { Inicio } from "./paginas/Inicio";
import { Sobre } from "./paginas/Sobre";

export const Router = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="sobre" element={<Sobre />} />
      </Routes>
    </>
  );
};
