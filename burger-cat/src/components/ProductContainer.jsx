import "./ProductContainer.css";

export const ProductContainer = (props) => {
  return (
    <section className="divContainer">
      <h2 className="tittleContainer">Menú:</h2>
      <div className="divProducts">{props.children}</div>
    </section>
  );
};
