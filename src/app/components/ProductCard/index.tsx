import { CartItem, Product } from "../../Types";
import style from "./styles.module.css";
import { useState } from "react";

type ProductCardProps = {
  product: Product;
  // addToCart: (p: Product, c: number)=> CartItem[];
  addToCart: (p: Product, c: number)=> void;
}

function ProductCard(props: ProductCardProps) {

  const [count, setCount] = useState(0);

  function handleClick(event: any){

    let newCount = count;

    const v = event.target.value;
    if (v == "+") {
      newCount = count+1;
    }

    if(v == "-"){
      newCount = Math.max(0, count-1);
    }
    setCount(newCount);
    props.addToCart(props.product, newCount);

  }

  return (
    <div className={style.productCard}>
      <h3>{props.product.name}</h3>
      <p>{props.product.description}</p>
      <h4>{props.product.price}</h4>
      <p><button onClick={handleClick} value="-">-</button> {count} <button onClick={handleClick} value="+">+</button></p>
    </div>
  );
}

export default ProductCard;