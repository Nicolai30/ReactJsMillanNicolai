import "./CartShop.Css"
import { LuShoppingBasket } from "react-icons/lu"; //carrito de compras - react icons
import { Link } from "react-router-dom"

export const CartShop = () => {
  
  return (
    <Link to="/Cart" className="CartShop">
      <LuShoppingBasket />
      <span>0</span>
    </Link>
  );
};