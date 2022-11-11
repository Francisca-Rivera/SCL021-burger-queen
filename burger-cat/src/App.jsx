import React from "react";
import { Pedidos } from "./views/pedidos/Pedidos.jsx";
import { Welcome } from "./views/welcome/Welcome.jsx";

import { Routes, Route } from "react-router-dom";

// ROUTER
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/Pedidos" element={<Pedidos />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </>
  );
};

export default App;
