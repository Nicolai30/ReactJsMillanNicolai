import {CartShop} from "../../common/CartShop/CartShop"
import "./NavBar.Css"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <div className="ContainerNavBar">
        {/* LOGO https://res.cloudinary.com/df0naogwq/image/upload/v1728429215/ik1mdugawd1hjrd1fuaz.png */}
        <Link to="/" >
          <img className="Logo" src="https://res.cloudinary.com/df0naogwq/image/upload/v1728429215/ik1mdugawd1hjrd1fuaz.png" 
          alt="The Art Hive - Where Creativity Thrives" />
        </Link>

        {/* Opciones del NavBar */}
        <ul className="optionsList">
          <Link to="/" className="NavLinks">Todas</Link>
          <Link to="/Category/Clasico" className="NavLinks">Clasico</Link>
          <Link to="/Category/Modernismo" className="NavLinks">Modernismo</Link>
          <Link to="/Category/Minimalista" className="NavLinks">Minimalista</Link>
          <Link to="/Nosotros" className="NavLinks">Nosotros</Link>
        </ul>

        {/* Carrito */}
        <CartShop />
      </div>
   </>
  )
}

export default NavBar