import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer"
import NavBar from "./components/layout/Navbar/NavBar.jsx"
import ItemDetailContainer from "./components/pages/ItemDetail/ItemDetailContainer"
import { CartContextProvider } from "./context/CartContext"
import Cart from "./components/pages/Cart/Cart"

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>

          <Route path="/" element={<ItemListContainer/>}/>
          
          <Route path="/Category/:Category" element={<ItemListContainer/>}/>
          
          <Route path="/Cart" element={<Cart />} />
          
          <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
          
          <Route path="/Nosotros" element={<h4 style={{  marginTop: 200,color:"black", textAlign: "center", fontSize: 20,fontWeight:"bold"}}>En The Art Hive, donde la creatividad prospera, nos dedicamos a la venta de obras de arte exclusivas que celebran el talento de nuestros artistas nacionales. Fundado por Nicolai Millán, The Art Hive tiene como misión acercar el arte clásico, el minimalismo y el modernismo a los hogares y espacios de quienes buscan piezas auténticas y con un toque de identidad cultural.

          Cada obra en nuestra colección es pintada a mano en lienzo, asegurando que nuestros clientes obtengan no solo una pieza de decoración, sino una experiencia visual única y un pedazo de la creatividad y pasión que caracteriza a nuestros artistas locales. Desde los matices elegantes del arte clásico, pasando por la serenidad del minimalismo, hasta la energía expresiva del modernismo, en The Art Hive ofrecemos algo para cada amante del arte.

          Nuestro compromiso es representar y promover el talento de nuestros artistas nacionales, haciendo que cada obra se convierta en una ventana hacia la cultura y el arte que define nuestra esencia. Con The Art Hive, estarás adquiriendo más que una pieza de arte: llevarás a casa una historia, una emoción y una expresión genuina de creatividad.</h4>} />
          

          <Route path="*" element={<h2 style={{ marginTop: 200,color:"red", textAlign: "center", fontSize: 50,fontWeight:"bold" }}>404 NOT FOUND</h2>} />
        
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
