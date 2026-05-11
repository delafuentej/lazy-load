import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import "../styles/custom-styles.css";

const product = {
  id: "",
  title: "",
  img: "./coffee-mug.png",
};

const ShoppingPage = () => {
  return (
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
      <ProductCard product={product} className="bg-dark">
        <ProductCard.Image img={"./coffee-mug.png"} />
        <ProductCard.Title title={"Coffe"} className="text-white" />
        <ProductCard.Buttons className="custom-buttons" />
      </ProductCard>

      <ProductCard product={product} className="bg-dark">
        <ProductImage img={product.img} className="custom-image" />
        <ProductTitle title={"Coffe"} className="text-white text-bold" />
        <ProductButtons className="custom-buttons" />
      </ProductCard>

      <ProductCard product={product} style={{ background: "gold" }}>
        <ProductImage img={product.img} />
        <ProductTitle
          title={"Coffe"}
          style={{ color: "#1d1d1d", fontWeight: "bold" }}
        />
        <ProductButtons
          style={{ display: "flex", justifyContent: "end", color: "white" }}
        />
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
