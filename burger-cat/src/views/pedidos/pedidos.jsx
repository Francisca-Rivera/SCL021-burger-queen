import { MenuOption, NavBar, SelectionTable } from "../../components/NavBar";
import { ProductContainer } from "../../components/ProductContainer";
import { ProductMenu } from "../../components/ProductMenu";
import data from "../data/productos.json";
import "./Pedidos.css";

export const Pedidos = () => {
  return (
    <div className="containerPedidos">
      <div id="navPedidos">
        <NavBar />
      </div>
      <div id="sectionTable">
        <section id="divContainerMenu">
          <MenuOption />
          <SelectionTable />
          <ProductContainer>
            {data.Breakfast.map((product) => (
              <ProductMenu
                key={product.name}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            ))}
            {data.Burger.map((product) => (
              <ProductMenu
                key={product.name}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            ))}
            {data.Accompaniments.map((product) => (
              <ProductMenu
                key={product.name}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            ))}
            {data.Aggregates.map((product) => (
              <ProductMenu
                key={product.name}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            ))}
            {data.Beverages.map((product) => (
              <ProductMenu
                key={product.name}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            ))}
          </ProductContainer>
        </section>
      </div>
    </div>
  );
};
