import { Pedidos } from "./views/pedidos/Pedidos.jsx";
import { Welcome } from "./views/welcome/Welcome.jsx";
import { Cocina } from "./views/cocina/Cocina.jsx";
import { Routes, Route } from "react-router-dom";

// ROUTER
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/Pedidos" element={<Pedidos />} />
        <Route path="/Cocina" element={<Cocina />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </>
  );
};

export default App;
