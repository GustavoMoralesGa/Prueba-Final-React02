import { createContext, useState, useEffect } from "react";

const pizzasContext = createContext();

const ProvidePizzas = ({child}) => {
  const [pizzas, setPizzas] = useState([]);
  const [shopCart, setShopCart] = useState([]);

  // traer data de JSON // 
  const getPizzas = async () => {
    const res = await fetch('/data.json');
    const pizzas = await res.json();
    setPizzas(pizzas);
  }

  useEffect(() => {
    getPizzas(); 
  }, []);

  // Agregar al carrito //

  const addToCart = ({ id, price, name, img }) => {
    const foundIndex = shopCart.findIndex((p) => p.id === id);
    const product = { id, price, name, img, count: 1  };

    if (foundIndex >= 0 ) {
      shopCart[foundIndex].count++;
      setShopCart([...shopCart]);  
    } else {
      setShopCart([...shopCart, product]);
    }
  };
 
  // Sumar producto
  
  const increase = (i) => {
    shopCart[i].count++;
    setShopCart([...shopCart])
  }  

  // restar producto

  const decrease = (i) => {
    const { count } = shopCart[i];
    if (count === 1) {
      shopCart.splice(i, 1);
    } else {
      shopCart[i].count--;
    }
    setShopCart([...shopCart]);
  };

  return (
    <pizzasContext.Provider
      value={{
        pizzas,
        shopCart,
        setShopCart,
        addToCart,
        increase,
        decrease,
      }}
    >
      {child}
    </pizzasContext.Provider>
  );
};

export { ProvidePizzas };

export default pizzasContext;