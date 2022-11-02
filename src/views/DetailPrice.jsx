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
        <h5>Detalles del pedido: </h5>
        <div>
          {shopCart.map((product, i) => (    
            <div key={i} className='d-flex justif-content-between py-2'>
              <div className="d-flex justify-content-beteen align-item-center">
                <img src={product.img} style={{ width: 70 }} alt={product.name} />
                <h5>{product.name}</h5>
              </div>
              <div className="d-flex justify-content-end align-item-center">
                <h5>
                  ${formatNumber(product.price * product.count)}
                </h5>
                <Button variant="dark" onClick={() => decrease(i)} >
                  Quitar
                </Button>
                <b>{product.count}</b>
                <Button variant="dark" onClick={() => increase(i)}>
                  Agregar
                </Button>
              </div> 
            </div>       
          ))}
        </div>
      
      <div className="footerTotal">
        <div>
          <Button variant="dark">Ir a pagar</Button> 
          <h2>Total: ${formatNumber(total)}</h2>
        </div>
        <div>
          <Link to='/'>
            <Button variant="dark">Volver</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default OrderDetails;