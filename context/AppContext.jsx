import { createContext, useState } from 'react';

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const totalItems = cartItems.reduce((acc, obj) => {
    return acc + obj.count;
  }, 0);

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <AppContext.Provider
      value={{ cartItems, setCartItems, clearCart, totalItems }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
