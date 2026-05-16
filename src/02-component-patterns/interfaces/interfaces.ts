import type { ReactElement } from "react";
import type { Props as ProductCardProps } from "../components/ProductCard";
import type { Props as ProductTitleProps } from "../components/ProductTitle";
import type { Props as ProductImageProps } from "../components/ProductImage";
import type { Props as ProductButtonsProps } from "../components/ProductButtons";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  decreaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  counter: number;
}

export interface ProductInCart extends Product {
  count: number;
}
