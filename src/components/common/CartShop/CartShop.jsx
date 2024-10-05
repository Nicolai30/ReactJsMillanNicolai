import "./CartShop.Css"
import { LuShoppingBasket } from "react-icons/lu"; //carrito de compras - react icons

export const CartShop = () => {
  return (
    <>
        <div className="CartShop">
            <LuShoppingBasket />
            <span>0</span>
        </div>
    </>
  );
};