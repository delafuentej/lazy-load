import { useContext, type CSSProperties } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

// const Counter = ({ counter = 0 }) => {
//   //const { counter } = useContext(ProductContext);

//   return <div className={styles.countLabel}>{counter}</div>;
// };

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { decreaseBy, increaseBy, counter } = useContext(ProductContext);
  // console.log(context);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => decreaseBy(-1)}>
        -
      </button>
      {/* <Counter counter={counter} /> */}
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};
