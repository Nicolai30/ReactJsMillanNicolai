import { useEffect, useState, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext"; // Asegúrate de importar el CartContext
import CircularProgress from '@mui/material/CircularProgress'; // Asegúrate de importar el componente CircularProgress
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // Estado para controlar el Alert de éxito
  const { addToCart, getTotalQuantity } = useContext(CartContext);

  let totalInCart = getTotalQuantity(id);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const productsCollection = collection(db, "Products");
        const docRef = doc(productsCollection, id);
        const res = await getDoc(docRef);
        setItem({ ...res.data(), id: res.id });
        setLoading(false); // Cambiar el estado de loading a false después de obtener los datos
      } catch (error) {
        console.error("Error fetching item: ", error);
        setLoading(false); // En caso de error también se cambia el estado a false
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
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      {showSuccessAlert && (
        <Alert severity="success">
          <AlertTitle>Agregado</AlertTitle>
          ¡Producto agregado al carrito con éxito!
        </Alert>
      )}
      <ItemDetail item={item} agregarAlCarrito={agregarAlCarrito} />
    </div>
  );
};

export default ItemDetailContainer;
