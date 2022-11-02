import { useContext } from "react";
import { CardGroup, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import pizzasContext from "../context/PizzaContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Cards = () => {
  const { pizzas, addToCart } = useContext(pizzasContext)
  const navigate = useNavigate()

  return (
      <CardGroup>
      {pizzas?.map((pizza) => (
        <Card className="Card" key={pizza.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
          <Card.Body className="cardBody">
            <Card.Title>{pizza.name}</Card.Title>
            <Card.Subtitle>Ingredientes</Card.Subtitle>
            <Card.Text>
              <ListGroup variant='flush'>
                {pizza.ingredients.map((ingredient, i) => (
                  <ListGroupItem 
                    className='border-0 text-capitalize'
                    key={ i }
                  >
                    🍕
                    {ingredient}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Card.Text>
            <Card.Text>
              <h2>$ {pizza.price}</h2>
            </Card.Text>
            <Button className="verButton" variant="dark"
              onClick={() => navigate(`/pizza/${pizza.id}`)}
            >Ver Más 👀
            </Button>
            <Button variant="dark"
              onClick={() => addToCart(pizza)}
            >
              Añadir 🛒            
            </Button>
          </Card.Body>
        </Card>
      ))}
      </CardGroup>
  )
}

export default Cards;