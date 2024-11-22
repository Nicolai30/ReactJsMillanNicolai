import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import "../Checkout/Checkout.css";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Checkout = () => {
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();
    const total = getTotalAmount();
    // comunicarnos con la API
    const order = {
      buyer: userInfo,
      items: cart, //[ {} {} {}]
      total: total,
    };
    let refCollection = collection(db, "orders");
    addDoc(refCollection, order).then((res) => {
      setOrderId(res.id);
      resetCart();
    }).catch((error) => {
      console.error("Error al crear la orden: ", error);
    });

    let refCol = collection(db, "products");
    order.items.forEach((item) => {
      let refDoc = doc(refCol, item.id);

      // Verificar si el documento existe
      getDoc(refDoc).then((docSnapshot) => {
        if (docSnapshot.exists()) {
          // Verificar si hay suficiente stock
          const productData = docSnapshot.data();
          if (productData.stock >= item.quantity) {
            updateDoc(refDoc, { stock: productData.stock - item.quantity })
              .catch((error) => {
                console.error("Error al actualizar el stock: ", error);
              });
          } else {
            console.log(`No hay suficiente stock para el producto ${item.id}`);
          }
        } else {
          console.log(`Producto con ID ${item.id} no encontrado en Firestore.`);
        }
      }).catch((error) => {
        console.error("Error al obtener el documento del producto: ", error);
      });
    });
  };

  const capturarInfo = (evento) => {
    const { name, value } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  if (orderId) {
    return <h2>Gracias por tu compra. Tu ticket es: {orderId}</h2>;
  }

  const deleteById = (id) => {
    // Lógica para eliminar por ID (por ahora no implementada)
  };

  return (
    <div className="checkout-container">
      <form onSubmit={funcionDelFormulario}>
        <TextField
          id="standard-basic"
          label="Nombre Completo"
          variant="standard"
          onChange={capturarInfo}
          placeholder="Nombre Completo"
          name="name"
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          onChange={capturarInfo}
          placeholder="Email"
          name="email"
        />
        <TextField
          id="standard-basic"
          label="Celular"
          variant="standard"
          onChange={capturarInfo}
          placeholder="Celular"
          name="phoneNumber"
        />
        <Button variant="contained" type="submit">Comprar</Button>
        <Button variant="outlined">Cancelar</Button>
      </form>
    </div>
  );
};

export default Checkout;
