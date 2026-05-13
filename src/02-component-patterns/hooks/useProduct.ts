import { useState, useEffect, useRef } from "react";
import type { onChangeArgs, Product } from "../interfaces/interfaces";

interface Props {
  product: Product;

  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

const useProduct = ({ onChange, product, value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);
  const isControlled = useRef(!!onChange);
  const increaseBy = (value: number) => {
    console.log(isControlled.current);
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }
    const newVal = Math.max(counter + value, 0);
    setCounter(newVal);
    onChange && onChange({ count: newVal, product });
  };
  const decreaseBy = (value: number) => {
    console.log(isControlled.current);
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }
    const newVal = Math.max(counter + value, 0);
    setCounter(newVal);
    onChange && onChange({ count: newVal, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { counter, increaseBy, decreaseBy };
};

export { useProduct };
