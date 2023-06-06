import { useState } from "react";
import { Product } from "../../../Types";

import styles from "./styles.module.css";

type ProductFormProps = {
  addToList: (p: Product)=> void;
};

function ProductForm(props: ProductFormProps) {
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.00);

  function handleClick(){
    props.addToList({
      id: -1,
      name: name,
      description: description,
      price: price
    });

    setName("");
    setDescription("");
    setPrice(0);
  }

  function handleName(event: any){
    setName(event.target.value);
  }

  function handleDescription(event: any){
    setDescription(event.target.value);
  }

  function handlePrice(event: any){
    setPrice(event.target.value);
  }
  
  return (
    <section className={styles.productForm}>
      <h2>Cargar producto</h2>
      <label htmlFor="nombre">
        Nombre: <br />
        <input type="text" placeholder="Ingrese el nombre del producto" value={name} onChange={handleName}/>
      </label>
      <br />
      <label htmlFor="descripcion">
        Descripción: <br />
        <input type="text" placeholder="Ingrese el nombre del producto" value={description} onChange={handleDescription}/>
      </label>
      <br />
      <label htmlFor="precio">
        Precio: <br />
        <input type="number" placeholder="Ingrese el precio del producto" value={price} onChange={handlePrice}/>
      </label>
      <br />
      <button onClick={handleClick} disabled={!(name!="" && price>0)}>Agregar producto</button>
    </section>
  );
}

export default ProductForm;
