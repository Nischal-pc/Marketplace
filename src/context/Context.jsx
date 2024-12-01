import { createContext, useEffect, useState } from "react";

const initialState = {};
export const CartContext = createContext(initialState);

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const savedToCart = localStorage.getItem("cart");
      return savedToCart ? JSON.parse(savedToCart) : [];
    } catch (err) {
      console.log("Error in retrieving Cart Data:", err);
    }
  });

  let sum = 0;
  cart.forEach((num) => {
    sum += num.price;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (value) => {
    setCart((prevData) => {
      const validCartData = Array.isArray(prevData)
        ? [...prevData, value]
        : [value];

      return validCartData;
    });
    console.log("called from the contextprovdier with value:", cart);
  };
  const deleteFromCart = (id) => {
    setCart(cart.filter((currentCartValue) => currentCartValue.id != id));
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart, sum }}>
      {children}
    </CartContext.Provider>
  );
}
