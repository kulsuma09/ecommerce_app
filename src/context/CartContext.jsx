/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   setCart((prev) => [...prev, product]);
  // };

  const addToCart = (product) => {
  setCart(prev => {
    const existing = prev.find(item => item.id === product.id);
    if (existing) {
      return prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    return [...prev, { ...product, quantity: 1 }];
  });
};
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item, i) => i !== id));
  };

  const updateQuantity = (index, delta) => {
  setCart(prevCart =>
    prevCart.map((item, i) =>
      i === index
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    )
  );
};
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity,  }}>
      {children}
    </CartContext.Provider>
  );
};
