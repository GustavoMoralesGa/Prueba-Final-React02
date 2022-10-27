import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { PizzasProvider } from './PizzasContext'
import Details from './pages/Details'
import OrderDetails from './pages/OrderDetails'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <PizzasProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pizza/:id' element={<Details />} />
          <Route path='/carrito' element={<OrderDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </PizzasProvider>
    </BrowserRouter>
  )
}



