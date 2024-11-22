  import { createContext, useState } from "react";

  export const CartContext = createContext();

  export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    //AGREGAR PRODUCTOS
    const addToCart = (product) => {
      if (!product.id || !product.title || !product.price || !product.quantity) {
        // console.error("Producto inválido:", product);
        return;
      }
      // Verificar si el producto ya está en el carrito
      let isInCart = cart.some((el) => el.id === product.id);
    
      if (isInCart) {
        // Si está, actualizamos la cantidad
        const updatedCart = cart.map((elemento) => {
          if (elemento.id === product.id) {
            return {
              ...elemento,
              quantity: elemento.quantity + product.quantity,
            };
          }
          return elemento; // Dejar los demás elementos sin cambios
        });
        setCart(updatedCart);
      } else {
        // Si no está, lo añadimos
        setCart([...cart, product]);
      }
    };
    

    //RESETEAR CARRITO
    const resetCart = () => {
      setCart([]);
    };

    //ELIMINAR POR ID 
    const removeById = (id) => {
      setCart((prevCart) => prevCart.filter((elemento) => elemento.id !== id)); // Filtrar producto
    };

    //TOTAL CARRITO
    const getTotalQuantity = (id) => {
      const product = cart.find((elemento) => elemento.id === id);
      return product ? product.quantity : 0; // Retorna la cantidad o 0 si no existe
    };

    //PRECIO TOTAL
    const getTotalAmount = () => {
      return cart.reduce((acc, elemento) => acc + elemento.price * elemento.quantity, 0); // Sumar el total
    };

    const data = {
      cart,
      addToCart,
      removeById,
      resetCart,
      getTotalQuantity,
      getTotalAmount,
    };

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
  };
