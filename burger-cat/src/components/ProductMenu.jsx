import { Button } from "./Button";
import "./ProductMenu.css";

export const ProductMenu = (props) => {
  return (
    <div className="menuCard">
      <picture>
        <img className="imgMenu" src={props.image} alt="menu" />
      </picture>
      <div className="infoProductMenu">
        <h2 className="nameCard">{props.name}</h2>
        <p className="descriptionCard">{props.description}</p>
        <div className="divPrice">
          <h3 className="priceCard">{props.price}</h3>
          <Button />
        </div>
      </div>
    </div>
  );
};
