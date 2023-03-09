import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToShoppingCart = (product) => {
    const productIndex = items.findIndex(
      (item) => item.productNumber === product.productNumber
    );
    if (productIndex === -1) {
      product.quantity = 1;
      setItems([...items, product]);
    } else {
      const newItems = [...items];
      newItems[productIndex].quantity++;
      setItems(newItems);
    }
  };

  const removeItem = (product) => {
    setItems(
      items
        .map((item) => {
          if (item === product) {
            if (item.quantity > 1) {
              item.quantity--;
              return item;
            } else {
              return null;
            }
          } else {
            return item;
          }
        })
        .filter((item) => item !== null)
    );
  };
  return (
    <CartContext.Provider value={{ items, addToShoppingCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
