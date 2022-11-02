import { NavLink } from "react-router-dom";
import { useContext } from "react";
import pizzasContext, { ProvidePizzas } from "../context/PizzaContext";
import { formatNumber } from '../FormatNumber'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'undefined')

  const { shopCart } = useContext(pizzasContext)
  const total = shopCart.reduce(
    (a, { count, price }) => a + price * count,
    0
  )

  return (
    <NavbarBootstrap bg="black" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink className={setActiveClass} to='/'>
              <img
              src='https://cdn4.vectorstock.com/i/thumb-large/20/08/logo-of-a-sketched-pizza-vector-24432008.jpg'
              width='100'
              height='100'
              />
              {' '}
            </NavLink>
            <div>
            <NavbarBootstrap.Brand><strong>¡Mamma Mía! </strong>Pizza</NavbarBootstrap.Brand>
            
            </div>
            <NavLink className={setActiveClass} to='/carrito'>
              <h3 className='cartFormat'>
              {' '}
              🛒 {''} $ {formatNumber(total)}
              </h3>
            </NavLink>
          </Nav>
        </Container>
      </NavbarBootstrap>
  )
}