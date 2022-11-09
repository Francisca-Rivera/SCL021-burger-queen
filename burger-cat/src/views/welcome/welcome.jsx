import React from "react";
import { Button } from "../components/Button.jsx";
import "./welcome.css";

export const Welcome = () => {
  return (
    <div id="viewsWelcome">
      <h1>Burger Cat's</h1>
      <picture id="logo">
        <img src="./public/img/cats-burger-1.png" alt="Logo Burger Cat´s" />
      </picture>
      <Button title="Pedidos" url="/pedidos" />
      <Button title="Cocina" url="/cocina" />
    </div>
  );
};
