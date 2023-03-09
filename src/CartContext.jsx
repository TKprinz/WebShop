import { createContext, useState } from "react";

export const CartContext = createContext({}); // Skapar en kontext för ShoppingCart.

// Fungerar som en Provider för ShoppingCartkontexten.
export function CartProvider({ children }) {
  // Statet för ShoppingCarts varor och dess kvantitet
  const [items, setItems] = useState([]);

  // Används för att lägga till en produkt i ShoppingCart.
  const addToShoppingCart = (product) => {
    // Hitta index för produkten i ShoppingCart.
    const productIndex = items.findIndex(
      (item) => item.productNumber === product.productNumber
    );
    // Om produkten inte finns i ShoppingCart, lägg till den med quantity 1.
    if (productIndex === -1) {
      product.quantity = 1;
      setItems([...items, product]);
    }
    // Annars öka kvantiteten för produkten.
    else {
      const newItems = [...items];
      newItems[productIndex].quantity++;
      setItems(newItems);
    }
  };

  // Används för att ta bort en produkt från ShoppingCart.
  const removeItem = (product) => {
    // Använder map för att minska kvantiteten på produkten eller ta bort den helt från ShoppingCart.
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
        // Använder filter för att ta bort alla produkter som returnerar null från map.
        .filter((item) => item !== null)
    );
  };
  // Lämnar data till barnkomponenterna genom value-prop.
  return (
    <CartContext.Provider value={{ items, addToShoppingCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
