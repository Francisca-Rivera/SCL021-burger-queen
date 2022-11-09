import React from "react";
import { Route, Routes } from "react-router-dom";

// Local imports
import { Welcome } from "./Welcome/Welcomeme.jsx";
import { Pedidos } from "../pedidos/pedidos.jsx";

// ROUTER
export const Path = () => {
  return (
    <>
      <Routes>
        <Route path="pedidos" element={<Pedidos />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </>
  );
};
