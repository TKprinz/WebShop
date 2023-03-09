import React, { useContext } from "react";
import { CartContext } from "../CartContext";

function ShoppingCart() {
  // Använder useContext för att hämta items, addToShoppingCart och removeItem från CartContext.
  const { items, addToShoppingCart, removeItem } = useContext(CartContext);

  // Beräkna den totala summan av ShoppingCartsartiklarna genom att använda reduce.
  const total = items.reduce((goUp, item) => {
    return goUp + item.price * item.quantity;
  }, 0);

  // Rendera korgen med JSX-kod.
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>

      {/* Använder map för att loopa genom varje Cart i ShoppingCart och renderar ut en ny Cart. */}
      {items.map((item, index) => (
        <div className="wholeCart" key={index}>
          <div className="imageContainer">
            <img src={item.image} alt="rolexPic" />
            <div className="CartIndex">
              <div className="name">{item.name}</div>
              <div className="productNumber">#{item.productNumber}</div>
              <div className="price">{item.price * item.quantity} SEK </div>
              <div className="addup">Quantity: {item.quantity} </div>
            </div>
            <div className="addUpBtn">
              {/* "Lägg till" lägger till en Cart i ShoppingCart. */}
              <button onClick={() => addToShoppingCart(item)}>Lägg till</button>
            </div>
            <div className="addDownBtn">
              {/* "Ta bort" tar bort en Cart från ShoppingCart. */}
              <button onClick={() => removeItem(item)}>Ta bort</button>
            </div>
          </div>
        </div>
      ))}

      {/* Totalpriset för ShoppingCart visas under Cart. */}
      <div className="total">Total: {total} SEK</div>
    </div>
  );
}

export default ShoppingCart;
