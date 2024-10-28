import  "./ItemListContainer.css"
import ItemCard from "../../common/ItemCard/ItemCard";
import { useEffect, useState } from "react";
import { Products } from "../../../products";


const MyProductPromise = new Promise((res,rej) => {
  setTimeout(()=>{                                            // Creamos una promesa para simular una carga de productos que puede tardar
    if (Products.length === 0)                                // un tiempo en completarse. La promesa se resolverá con los productos si
      rej("Productos vacios");                                // hay elementos en el arreglo `Products`, o se rechazará con un mensaje
    else{                                                     // de error si el arreglo está vacío. Esto es útil para simular situaciones
      res(Products)                                           // del mundo real, como la carga de datos desde una API.
    }
  }, 2500); // Simulamos una espera de 2.5 segundos
})

export const ItemListContainer = ({}) => {
  const [MyProducts, setMyProducts] = useState([])

  useEffect(()=>{
    
    MyProductPromise.then((data)=>{
      //console.log(data);
      setMyProducts(data);
    }).catch((err)=>{
      console.log(err)
    }).finally(()=>{
      console.log("finally-Siempre se ejecuta")
    })

  },[]) // Ejecutamos el efecto solo una vez al montar el componente
  
  return (
    <div className="ItemListContainer">
      {MyProducts.map((item) => (
        <ItemCard 
          key={item.id}  // id={item.id}
          // stock={item.stock} 
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

