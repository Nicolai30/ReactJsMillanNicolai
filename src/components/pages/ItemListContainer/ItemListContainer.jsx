import "./ItemListContainer.css";
import ItemCard from "../../common/ItemCard/ItemCard";
import { useEffect, useState } from "react";
import { Products } from "../../../products";
import { useParams } from "react-router-dom";

// Promesa que simula la carga de productos
const MyProductPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Products.length === 0) {
      reject("Productos vacíos");
    } else {
      resolve(Products);
    }
  }, 2500); // Simulación de espera de 2.5 segundos
});

export const ItemListContainer = () => {
  const { Category } = useParams(); 
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = Products.filter((product) => product.Category === Category);
    
    MyProductPromise.then((data) => {
      setMyProducts(Category ? filteredProducts : data);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      console.log("Carga de productos completada");
    });
  }, [Category]);

  return (
    <div className="ItemListContainer">
      {myProducts.map((item) => (
        <ItemCard 
          key={item.id} 
          id={item.id}
          title={item.title} 
          price={item.price} 
          artist={item.artist} 
          Category={item.Category}
          className="card" 
          ImageSrc={item.ImageSrc}
        />
      ))}
    </div>
  );
};
