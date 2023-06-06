import { useEffect, useState } from "react";
import { Product, CartItem } from "../../../Types";
import ProductCard from "../../../components/ProductCard";

import styles from "./styles.module.css";

type ProductTableProps = {
  products: Product[];
  cartItems: CartItem[];
  // addToCart: (p: Product, v: number)=> CartItem[];
  addToCart: (p: Product, v: number) => void;
};

function ProductTable(props: ProductTableProps) {
  const [total, setTotal] = useState(0);

  function onAddToCart(product: Product, value: number) {
    props.addToCart(product, value);

    const total =
      props.cartItems.length > 0
        ? props.cartItems
            .filter((item) => item.count > 0)
            .map((item) => item.product.price * item.count)
            .reduce((acc, cv) => acc + cv, 0)
        : 0;

    setTotal(total);
  }

  return (
    <section className={styles.productTable}>
      <h2>Productos existentes</h2>
      <h4>Total: ${total}</h4>
      <div className={styles.productDisplay}>
        {props.products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={onAddToCart}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProductTable;
