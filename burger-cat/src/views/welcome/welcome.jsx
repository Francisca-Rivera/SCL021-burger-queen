import { Link } from "react-router-dom";
import "./Welcome.css";

export const Welcome = () => {
  return (
    <section id="viewsWelcome">
      <h1>Burger Cat's</h1>
      <picture id="logo">
        <img
          id="imgLogo"
          src="./img/cats-burger-1.png"
          alt="Logo Burger Cat´s"
        />
      </picture>
      <div id="btnsWelcome">
        <button className="btnPedidos">
          <Link to="/pedidos">Pedidos</Link>
        </button>
        <button className="btnCocina">
          <Link to="/cocina">Cocina</Link>
        </button>
      </div>
      <footer>
        <p className="footer">©Copyright Francisca Rivera 2022</p>
      </footer>
    </section>
  );
};
