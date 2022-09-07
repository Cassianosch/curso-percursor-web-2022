import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/sobre/programador.cs">Sobre - Notícia</Link>
        </li>
      </ul>
    </div>
  );
};
