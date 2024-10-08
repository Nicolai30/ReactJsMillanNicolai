import {CartShop} from "../../common/CartShop/CartShop"
import "./NavBar.Css"

const NavBar = () => {
  return (
    <>
      <div className="ContainerNavBar">
        {/* LOGO https://res.cloudinary.com/df0naogwq/image/upload/v1728429215/ik1mdugawd1hjrd1fuaz.png */}
        <img className="Logo" src="https://res.cloudinary.com/df0naogwq/image/upload/v1728429215/ik1mdugawd1hjrd1fuaz.png" 
        alt="The Art Hive - Where Creativity Thrives" />
        

        {/* Opciones del NavBar */}
        <ul className="optionsList">
          <li className="NavLinks">Cuadros y Laminas</li>
          <li className="NavLinks">Infantiles</li>
          <li className="NavLinks">Artistas Nacionales</li>
          <li className="NavLinks">Ofertas</li>
        </ul>

        {/* Carrito */}
        <CartShop />
      </div>
   </>
  )
}

export default NavBar