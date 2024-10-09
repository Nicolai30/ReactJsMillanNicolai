import NavBar from './components/layout/Navbar/NavBar'
import { ItemListContainer } from './components/pages/ItemListContainer/ItemListContainer'
import { Products } from './products'

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer Items={Products} />
      {/* <Footer /> */}
    </>
  )
}

export default App
