import { useEffect, useState, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext"; 
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart, getTotalQuantity } = useContext(CartContext);

  const [loading, setLoading] = useState(true);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  
  const totalInCart = getTotalQuantity(id);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true); // Aseguramos el estado inicial antes de la solicitud
      try {
        const docRef = doc(collection(db, "Products"), id);
        const res = await getDoc(docRef);

        if (res.exists()) {
          setItem({ ...res.data(), id: res.id });
        } else {
          // console.error(`No se encontró el producto con id: ${id}`);
          setItem(null); 
        }
      } catch (error) {
        // console.error("Error fetching item:", error);
        setItem(null); 
      } finally {
        setLoading(false); // Siempre terminamos con loading en false
      }
    };

    fetchItem();
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let objeto = { ...item, quantity: cantidad };
    addToCart(objeto);
    setShowSuccessAlert(true);
    setTimeout(() => setShowSuccessAlert(false), 3000);
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (!item) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          No se encontró el producto solicitado.
        </Alert>
      </div>
    );
  }

  return (
    <div>
      {showSuccessAlert && (
        <Alert
          severity="success"
          style={{
            position: "fixed",
            top: "10px",
            right: "85px",
            zIndex: 1000,
          }}
        >
          <AlertTitle>Agregado</AlertTitle>
          ¡Producto agregado al carrito con éxito!
        </Alert>
      )}
      <ItemDetail 
        item={item} 
        agregarAlCarrito={agregarAlCarrito} 
        totalInCart={totalInCart} />
    </div>
  );
};

export default ItemDetailContainer;
