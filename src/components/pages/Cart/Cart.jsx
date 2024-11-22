import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import "../Cart/Cart.css"

const Cart = () => {
  const { cart, resetCart, removeById, getTotalAmount } = useContext(CartContext);

  const totalAmount = getTotalAmount(); 

  const navigate = useNavigate(); // Obtén el método para navegar

  const Checkout = () => {
    navigate("/checkout"); // Redirige a la página de checkout
  };

  return (
    <div className="CartContainer">
      <h1>Carrito de Compras</h1>

      {cart.length > 0 ? (
        <>
          {cart.map((item) => (  // No necesitas desestructurar `{ item }` aquí
            <div className="CartConProductos" key={item.id}>
              <div className="Cart-detail">
                <img className="Cart-image" src={item.ImageSrc} alt={item.title} />
                <div className="Cart-info">
                  <h1>{item.title}</h1>
                  <h3>Artista: {item.artist}  || Categoria: {item.Category}</h3>
                  <p>{item.description}</p>
                  <p>Llevados: {item.quantity} || Precio c/u: US$ {item.price} </p>
                </div>
                  <Button  className="ButtonEliminar" onClick={() => removeById(item.id)} variant="small" endIcon={<RemoveCircleOutlineIcon/>} > Eliminar </Button>
              </div>
            </div>
          ))}
          <div>
            <h2 className="FinalizarCompra"> El total a pagar es: US${totalAmount} </h2>
            <div className="ButtonContainer">
              <Button className="Button" onClick={resetCart} variant="contained" endIcon={<DeleteForeverIcon />}> Limpiar carrito </Button>
              <Button onClick={Checkout} className="Button" variant="contained" endIcon={<AddShoppingCartIcon />}> Finalizar compra </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="CartVacio">
          <h2>Sin productos</h2>
          <p>El carrito está vacío</p>
        </div>    
      )}
    </div>
  );
};

export default Cart;

