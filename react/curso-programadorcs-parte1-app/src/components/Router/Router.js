import React from "react";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./paginas/Menu";
import { Inicio } from "./paginas/Inicio";
import { Sobre } from "./paginas/Sobre";
import { Noticia } from "./paginas/Sobre/Noticia";

export const Router = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="sobre/:id" element={<Noticia />} />
        <Route path="*" element={<div>Página de erro!</div>} />
      </Routes>
    </>
  );
};
