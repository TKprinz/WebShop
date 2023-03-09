import React, { useState, useContext } from "react";

import { CartContext } from "../CartContext";

function Products(props) {
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  const { addToShoppingCart } = useContext(CartContext);

  function handleClick(index) {
    setSelectedProductIndex(index === selectedProductIndex ? null : index);
  }

  const handleAddToShoppingCart = (product) => {
    addToShoppingCart(product);
  };

  let Object;
  if (props.product) {
    Object = props.product.map((product, index) => (
      <div className="product-container" key={index}>
        <img src={product.image} width="150px" alt="" />
        <div className="product-info">
          <h4>{product.name}</h4>
          <button onClick={() => handleClick(index)}>
            {selectedProductIndex === index ? "Dölj detaljer" : "Visa detaljer"}
          </button>
          <button onClick={() => handleAddToShoppingCart(product)}>
            Lägg till
          </button>

          {selectedProductIndex === index && (
            <div>
              <p> #{product.productNumber}</p>
              <p>{product.description}</p>
              <p>{product.price} Sek </p>
              <p>{product.details}</p>
            </div>
          )}
        </div>
      </div>
    ));
  }

  return <>{Object}</>;
}

export default Products;
