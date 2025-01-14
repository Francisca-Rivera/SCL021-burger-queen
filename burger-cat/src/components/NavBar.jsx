import { Link } from "react-router-dom";
import { useState } from "react";
import data from "../views/data/productos.json";

const breakfast = data.breakfast;
const lunch = data.lunch;

export const NavBar = () => {
  return (
    <section id="navBar">
      <nav>
        <div id="welcomeNav">
          <h3>Hi, cat!</h3>
        </div>
        <div>
          <h2>Burger Cat´s</h2>
        </div>
        <picture id="imgenNav">
          <img id="imgNav" src="./img/burger-cat2.png" alt="Gatito" />
        </picture>
        <div id="buttonBack">
          <button className="btnBack">
            {" "}
            <Link to="/">Back</Link>{" "}
          </button>
        </div>
      </nav>
    </section>
  );
};

export const SelectionTable = () => {
  return (
    <div id="selectionTable">
      <button className="btnTables">Mesa 4</button>
      <button className="btnTables">Mesa 3</button>
      <button className="btnTables">Mesa 2</button>
      <button className="btnTables">Mesa 1</button>
    </div>
  );
};

export const MenuOption = () => {
  const [setItem] = useState([]);
  return (
    <div id="menu">
      <button
        className="menuSelection"
        onClick={() => {
          setItem(breakfast);
        }}
      >
        Desayuno
      </button>
      <button
        className="menuSelection"
        onClick={() => {
          setItem(lunch);
        }}
      >
        Almuerzo
      </button>
    </div>
  );
};
