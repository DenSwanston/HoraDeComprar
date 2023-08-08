import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'



const App = () => {

  return (

    <BrowserRouter>
      <NavBar />
      <ItemListContainer/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/estilo/:estilo" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App