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
    <NavbarBootstrap bg="primary" variant="dark">
        <Container>
          <NavbarBootstrap.Brand href="#home">Pizzeria Mamma Mía!</NavbarBootstrap.Brand>
          <Nav className="me-auto">
            <NavLink className={setActiveClass} to='/'>
              <img
              src='https://w7.pngwing.com/pngs/427/304/png-transparent-pizza-sticker-cartoon-drawing-pizza-food-fruit-food-drinks.png'
              width='40'
              height='40'
              />
              {' '}
            </NavLink>
            <NavLink className={setActiveClass} to='/carrito'>
              <h4 className='mb-0'>
              {' '}
              🛒 {''} $ {formatNumber(total)}
              </h4>
            </NavLink>
          </Nav>
        </Container>
      </NavbarBootstrap>
  )
}