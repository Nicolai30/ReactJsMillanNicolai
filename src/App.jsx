import NavBar from './components/layout/Navbar/NavBar'
import { ItemListContainer } from './components/pages/ItemListContainer/ItemListContainer'

function App() {
  //Productos
  const Items = [
    { title: "Pintura Abstracta En Blanco Y Negro", price: 1200, artist: "Steve Johnson", stock: 5, ImageSrc: "https://res.cloudinary.com/df0naogwq/image/upload/v1728353729/eqmkczrsbgn91bhyyhy1.jpg" },
    { title: "Cuadro Abstracto Naranja Y Azul", price: 1200, artist: "Paul Blenkhorn", stock: 5, ImageSrc: "https://res.cloudinary.com/df0naogwq/image/upload/v1728353873/v2ztp3nmfuz5rislpjj6.jpg" },
    { title: "Cuadro Abstracto Naranja Y Azul", price: 1200, artist: "Diana", stock: 5, ImageSrc: "https://res.cloudinary.com/df0naogwq/image/upload/v1728353565/qjzrehwhkygo09guy6u9.jpg" },
    { title: "Cuadro Abstracto Naranja Y Azul", price: 1200, artist: "Paul Blenkhorn", stock: 5, ImageSrc: "https://res.cloudinary.com/df0naogwq/image/upload/v1728353875/lfte1hmpeawpvub9ee7a.jpg" },
    { title: "Real Madre", price: 1200, artist: "zhang kaiyv", stock: 5, ImageSrc: "https://res.cloudinary.com/df0naogwq/image/upload/v1728354141/be6s0ua2lnagfumy1hbt.jpg" },
    { title: "Repe-2", price: 1200, artist: "Paul Blenkhorn", stock: 5, ImageSrc: "https://res.cloudinary.com/df0naogwq/image/upload/v1728353873/v2ztp3nmfuz5rislpjj6.jpg" },
    { title: "Repe-5", price: 1200, artist: "zhang kaiyv", stock: 5, ImageSrc: "https://res.cloudinary.com/df0naogwq/image/upload/v1728354141/be6s0ua2lnagfumy1hbt.jpg" },
    { title: "Repe-4", price: 1200, artist: "Paul Blenkhorn", stock: 5, ImageSrc: "https://res.cloudinary.com/df0naogwq/image/upload/v1728353875/lfte1hmpeawpvub9ee7a.jpg" },
    { title: "Repe-1", price: 1200, artist: "Steve Johnson", stock: 5, ImageSrc: "https://res.cloudinary.com/df0naogwq/image/upload/v1728353729/eqmkczrsbgn91bhyyhy1.jpg" },
    { title: "Repe-3", price: 1200, artist: "Diana", stock: 5, ImageSrc: "https://res.cloudinary.com/df0naogwq/image/upload/v1728353565/qjzrehwhkygo09guy6u9.jpg" }
  ];
  
  return (
    <>
      <NavBar/>
      <ItemListContainer Items={Items} />
    </>
  )
}

export default App
