import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProvidePizzas } from './context/PizzaContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css'
import Navbar from './components/Navbar'
import Details from './views/Details'
import OrderDetails from './views/DetailPrice'
import Home from './views/Home'
import NotFound from './views/NotFound'


export default function App() {
  return (
    <BrowserRouter>
      <ProvidePizzas>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pizza/:id' element={<Details />} />
          <Route path='/carrito' element={<OrderDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ProvidePizzas> 
    </BrowserRouter>
  )
}



