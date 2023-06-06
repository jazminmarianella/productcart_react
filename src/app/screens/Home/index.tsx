import { useState } from "react";

import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";
import style from "./styles.module.css";

import { CartItem, Product } from "../../Types";

const defaultProducts: Product[] = [
  {
    id: 0,
    name: "producto 1",
    description: "producto 1 descripcion",
    price: 1000.0,
  },
  {
    id: 1,
    name: "producto 2",
    description: "producto 2 descripcion",
    price: 1500.0,
  },
  {
    id: 2,
    name: "producto 3",
    description: "producto 3 descripcion",
    price: 1800.0,
  },
];

function Home() {
  const [products, setProducts] = useState(defaultProducts);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleAddProduct(newProduct: Product): void {
    newProduct.id = products.length;
    setProducts(products.concat(newProduct));
  }

  function handleAddCartItemList(product: Product, value: number){
    let found = false;

    for (let i = 0; i < cartItems.length; i++){
      if (cartItems[i].product == product){
        cartItems[i].count = value;
        found = true;
        break;
      }
    }

    if (!found && value > 0){
      cartItems.push({product: product, count: 1});
    }

    setCartItems(cartItems);

    return cartItems;
  }

  return (
    <main>
      <h1>App Carrito!</h1>
      <section className={style.sections}>
        <ProductForm addToList={handleAddProduct} />
        <ProductTable products={products} cartItems={cartItems} addToCart={handleAddCartItemList}/>
      </section>
    </main>
  );
}

export default Home;
