import { useShoppingCart } from "../hooks/useShoppingCart";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import { products } from "../../data/products";
import "../styles/custom-styles.css";

const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <>
      <div>
        <h1>Shopping Page</h1>
        <hr />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        ></div>
        {/* <ProductCard product={product1} className="bg-dark"> */}
        {/* <ProductCard.Image img={"./coffee-mug.png"} /> */}
        {/* <ProductCard.Title className="text-white" /> */}
        {/* <ProductCard.Buttons className="custom-buttons" /> */}
        {/* </ProductCard> */}

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            onChange={(ev) => onProductCountChange(ev)}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage img={product.img} className="custom-image" />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark"
            style={{
              width: "100px",
            }}
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductImage
              img={product.img}
              className="custom-image"
              style={{
                width: "80px",
              }}
            />
            {/* <ProductTitle className="text-white text-bold" /> */}
            <ProductButtons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
    </>
  );
};

export default ShoppingPage;
