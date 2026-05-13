import { useState } from "react";
import type { Product, ProductInCart } from "../interfaces/interfaces";

const useShoppingCart = () => {
  const [shoppingCart, setShoppingChart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  console.log(shoppingCart);

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    console.log("count", count);

    setShoppingChart((prev) => {
      //   const productInCart: ProductInCar = prev[product.id] || {
      // ...product,
      // count: 0,
      //   };

      //   if (Math.max(productInCart.count + count, 0) > 0) {
      // productInCart.count += count;
      // return {
      //   ...prev,
      //   [product.id]: productInCart,
      // };
      //   }

      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = prev;
        console.log("toDelete", toDelete);
        return rest;
      }

      return {
        ...prev,
        [product.id]: { ...product, count },
      };
    });
  };
  return {
    onProductCountChange,
    shoppingCart,
  };
};

export { useShoppingCart };
