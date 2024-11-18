import { Badge } from "@mui/material";
import { LuShoppingBasket } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartShop = () => {
  const { cart } = useContext(CartContext); // obtener la función desde el contexto

  return (
    <Link to="/Cart" className="CartShop">
      <Badge
        badgeContent={cart.length} // mostrar la cantidad total de artículos
        style={{ padding: 1 }}
        color="primary"
        showZero
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <LuShoppingBasket />
      </Badge>
    </Link>
  );
};
