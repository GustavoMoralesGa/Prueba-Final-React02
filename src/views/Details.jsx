import { useState, useContext, useEffect } from "react";
import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import pizzasContext from '../context/PizzaContext'

const Details = () => {
  const [pizza, setPizza] = useState(null);
  const { pizzas, addToCart } = useContext(pizzasContext)
  const { id } = useParams()

  useEffect(() => {
    const getPizza = async () => {
      const result = pizzas.filter((obj) => obj.id === id)
      setPizza(result)
    }
    getPizza()
  }, [pizzas, id])

  return (
    <>
      {pizza ? (
        <Container className="detailContainer">
          <Card key={pizza[0].id} style={{width: '22rem'}}>
              <Card.Header><Card.Img variant="top" src={pizza[0].img} /></Card.Header>
              <Card.Body>
                <Card.Title>{pizza[0].name}</Card.Title>
                <Card.Text>
                 {pizza[0].desc}
                </Card.Text>
                <Card.Subtitle>
                  Ingredientes:
                </Card.Subtitle>
                <Card.Text>
                  <ListGroup variant='flush'>
                    {pizza[0].ingredients.map((ingredient, i) => (
                      <ListGroup.Item 
                        className='border-0 text-capitalize'
                        key={ i }
                      >
                        🍕
                        {ingredient}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  <Card.Text>Valor: ${pizza[0].price}</Card.Text>
                      
                  <Button 
                    className="detailButton"
                    variant="dark"
                    onClick={() => addToCart(pizza[0])}>
                        Añadir 🛒
                  </Button>
                  <Link to='/'>
                    <Button variant="dark">
                          Volver
                    </Button>
                  </Link>
                </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      ) : null }  
    </>
  )
}

export default Details;