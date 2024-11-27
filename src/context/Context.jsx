import { createContext, useState } from "react";

const initialState = {};
export const CartContext = createContext(initialState);

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = (value) => {
    setCart((prevData) => {
      const validCartData = Array.isArray(prevData)
        ? [...prevData, value]
        : [value];

      return validCartData;
    });
    console.log("called from the contextprovdier with value:", cart);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
