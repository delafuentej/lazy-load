import { createContext, useContext, useState } from "react";
import { useProduct } from "../hooks/useProduct";
import type { ReactElement, CSSProperties } from "react";

import type {
  // ProductCardProps,
  ProductContextProps,
  onChangeArgs,
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// interface ProductButtonsProps {
// increaseBy: (value: number) => void;
// decreaseBy: (value: number) => void;
// counter: number;
// }

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
}: Props) => {
  const { decreaseBy, increaseBy, counter } = useProduct({
    onChange,
    product,
    value,
  });

  return (
    <Provider value={{ product, decreaseBy, increaseBy, counter }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
        {/* <ProductImage img={product.img} /> */}
        {/* <ProductTitle title={product.title} /> */}
        {/* <ProductButtons 
        // counter={counter}
        // decreaseBy={decreaseBy}
        // increaseBy={increaseBy}
      // />*/}
      </div>
    </Provider>
  );
};

export default ProductCard;
