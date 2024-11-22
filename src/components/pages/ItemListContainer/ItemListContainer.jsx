import "./ItemListContainer.css";
import ItemCard from "../../common/ItemCard/ItemCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { Products } from "../../../products";
import { AddToDriveOutlined } from "@mui/icons-material";

export const ItemListContainer = () => {
  const { Category } = useParams();
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    const ProductsCollection = collection(db, "Products");
    let docsRef = ProductsCollection;

    if (Category) {
      docsRef = query(ProductsCollection, where("Category", "==", Category));
    }

    getDocs(docsRef).then((res) => {
      let arrayEntendible = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setMyProducts(arrayEntendible);
    });
  }, [Category]);

  // Condición para mostrar los elementos Skeleton mientras se cargan los productos
  if (myProducts.length === 0) {
    return (
      <div className="SkeletonItem">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            <Skeleton variant="rectangular" width={300} height={450} />
            <Skeleton variant="text" width={300} height={55} />
            <Skeleton variant="text" width={300} height={35} />
            <Skeleton variant="text" width={300} height={35} />
            <Skeleton variant="text" width={300} height={35} />
          </div>
        ))}
      </div>
    );
  }

  // *****BOTTON PARA CARGAR BD******
  // const AgregoCosas = () => {
  //   const productsCollection = collection(db, "Products");

  //   Products.forEach((Product)=>{
  //     addDoc(productsCollection,Product)
  //   })
  // };

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
      {/* 
      BOTTON PARA CARGAR BD
      <button onClick={AgregoCosas}>cargar</button> 
      */}
    </div>
  );
};
