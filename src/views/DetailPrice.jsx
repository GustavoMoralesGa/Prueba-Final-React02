import { useContext, useEffect } from "react";
import pizzasContext from "../context/PizzaContext";
import { formatNumber } from "../FormatNumber";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const OrderDetails = () => {
  const { shopCart, increase, decrease } = useContext(pizzasContext)
  const total = shopCart.reduce(
    (a, {count, price}) => a + price * count,
    0
  )

  useEffect(() => {
    console.log(shopCart)
  }, [shopCart])  

  return (
    <>
      <div >
        <h5>Detalles del pedido: </h5>
        <div>
          {shopCart.map((product, i) => (    
            <div key={i} className='d-flex justif-content-between py-2'>
              <div>
                <img src={product.img} style={{ width: 50 }} alt={product.name} />
                <h5>{product.name}</h5>
              </div>
              <div>
                <h5>
                  ${formatNumber(product.price * product.count)}
                </h5>
                <Button onClick={() => decrease(i)} >
                  Quitar
                </Button>
                <b>{product.count}</b>
                <Button onClick={() => increase(i)}>
                  Agregar
                </Button>
              </div> 
            </div>       
          ))}
        </div>
      </div>
      <div>
        <Button>Ir a pagar</Button> 
        <h2>Total: ${formatNumber(total)}</h2>
      </div>
      <div>
        <Link to='/'>
          <Button>Volver</Button>
        </Link>
      </div>
    </>
  )
}

export default OrderDetails;