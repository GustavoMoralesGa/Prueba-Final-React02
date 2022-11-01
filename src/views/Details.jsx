import { useState, useContext, useEffect } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
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
        <div>
          <Card key={pizza[0].id}>
              <Card.Header as="h5"><Card.Img variant="top" src={pizza[0].img} /></Card.Header>
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
                      
                  <Button onClick={() => addToCart(pizza[0])}>
                        Añadir 🛒
                  </Button>
                  <Link to='/'>
                    <Button>
                          Volver
                    </Button>
                  </Link>
                </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ) : null }  
    </>
  )
}

export default Details;