import { createContext, useState, useEffect } from "react";

const PizzasContext = createContext();

const ProvidePizzas = ({children}) => {
  const [pizzas, setPizzas] = useState([]);
  const [shopCart, setShopCart] = useState([]);

  // traer data de JSON // 
  const getPizzas = async () => {
    const res = await fetch('Data.json');
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
    <PizzasContext.Provider
      value={{
        pizzas,
        shopCart,
        setShopCart,
        addToCart,
        increase,
        decrease,
      }}
    >
      {children}
    </PizzasContext.Provider>
  );
};

export { ProvidePizzas };

export default PizzasContext;