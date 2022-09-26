import { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalItems(
      cartItems.reduce(function (prev, cur) {
        return prev + cur.count;
      }, 0)
    );

    setTotalPrice(
      cartItems.reduce(function (prev, cur) {
        return prev + cur.price * cur.count;
      }, 0)
    );
  }, [cartItems]);

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <AppContext.Provider
      value={{ cartItems, setCartItems, clearCart, totalItems, totalPrice }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
