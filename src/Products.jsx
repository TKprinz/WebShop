import React, { useState } from "react";
import data from "./Rolex-list.json";

// Funktionen som renderar alla produkter från json-filen.
function Products() {
  return (
    <div className="rolex-list">
      {data.map((product, index) => (
        // Renderar en Produkt-komponent för varje produkt i json-filen.
        <Product key={index} product={product} />
      ))}
    </div>
  );
}
// Funktionen som renderar information om en specifik produkt.
function Product(props) {
  const [showDetails, setShowDetails] = useState(false);
  // Funktionen som ändrar showDetails-variabelns värde när användaren klickar på knappen.
  function handleClick() {
    setShowDetails(!showDetails);
  }

  return (
    <div className="product-container">
      <img src={props.product.image} width="150px" alt="" />
      <div className="product-info">
        <h4>{props.product.name}</h4>
        <button onClick={handleClick}>
          {showDetails ? "Dölj detaljer" : "Visa detaljer"}
        </button>
        {/* Renderar detaljer om produkten när showDetails är true */}
        {showDetails && (
          <div>
            <p> #{props.product.productNumber}</p>
            <p>{props.product.description}</p>
            <p>{props.product.price} Sek </p>
            <p>{props.product.details}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
