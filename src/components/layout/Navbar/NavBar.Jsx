import {CartShop} from "../../common/CartShop/CartShop"
import "./NavBar.Css"

const NavBar = () => {
  return (
    <>
      <div className="ContainerNavBar">
        {/* Logo */}
        <img className="Logo" src="https://res.cloudinary.com/df0naogwq/image/upload/v1728088328/jp2wosdbys1xbdq8udda.png" 
        alt="The Art Hive - Where Creativity Thrives" />
        

        {/* Opciones del NavBar */}
        <ul className="optionsList">
          <li href ="#" className="NavLinks">Cuadros y Laminas</li>
          <li href ="#" className="NavLinks">Infantiles</li>
          <li href ="#" className="NavLinks">Artistas Nacionales</li>
          <li href ="#" className="NavLinks">Ofertas</li>
        </ul>

        {/* Carrito */}
        <CartShop />
      </div>
   </>
  )
}

export default NavBar