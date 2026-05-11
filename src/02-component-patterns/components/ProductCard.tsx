import { createContext, useContext, useState } from "react";
import type { ReactElement, CSSProperties } from "react";

import type {
  // ProductCardProps,
  ProductContextProps,
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
}

export const ProductCard = ({ product, children, className, style }: Props) => {
  const [counter, setCounter] = useState(0);

  const increaseBy = () => {
    setCounter((currentValue) => currentValue + 1);
  };

  const decreaseBy = () => {
    setCounter((currentValue) => Math.max(0, currentValue - 1));
  };

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
