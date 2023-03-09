import React, { useContext } from "react";
import { CartContext } from "../CartContext";

function ShoppingCart() {
  const { items, addToShoppingCart, removeItem } = useContext(CartContext);

  const total = items.reduce((goUp, item) => {
    return goUp + item.price * item.quantity;
  }, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>

      {items.map((item, index) => (
        <div className="wholeCart" key={index}>
          <div className="imageContainer">
            <img src={item.image} alt="rolexPic" />
            <div>
              <div className="name">{item.name}</div>
              <div className="productNumber">#{item.productNumber}</div>
              <div className="price">{item.price * item.quantity} SEK </div>
              <div className="addup">Quantity: {item.quantity} </div>
            </div>
            <div className="addUpBtn">
              <button onClick={() => addToShoppingCart(item)}>Lägg till</button>
            </div>
            <div className="addDownBtn">
              <button onClick={() => removeItem(item)}>Ta bort</button>
            </div>
          </div>
        </div>
      ))}

      <div className="total">Total: {total} SEK</div>
    </div>
  );
}

export default ShoppingCart;
