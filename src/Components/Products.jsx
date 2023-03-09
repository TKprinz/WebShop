import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from "../CartContext";

function Products(props) {
  // Hämtar addToShoppingCart från CartContext.
  const { addToShoppingCart } = useContext(CartContext);

  // useState-hook.
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Lägger till produkten i ShoppingCart.
  const handleAddToShoppingCart = (product) => {
    addToShoppingCart(product);
  };

  // Visar mer info om produkten i en modal.
  const handleShow = (product) => {
    setSelectedProduct(product);
  };

  // Stänger modalfönstret.
  const handleClose = () => {
    setSelectedProduct(null);
  };

  // Renderar JSX-kod för varje produkt i Rolex-listan med bild, namn, knappar för mer info och lägg till i ShoppingCart.
  const Object = props.product
    ? props.product.map((product, index) => (
        <div className="product-container" key={index}>
          <img
            className="imgFirstView"
            src={product.image}
            width="150px"
            alt=""
          />
          <div className="product-info">
            <h4>{product.name}</h4>
            <button onClick={() => handleShow(product)}>Mer info</button>
            <button onClick={() => handleAddToShoppingCart(product)}>
              Lägg till
            </button>
            {selectedProduct === product && (
              <Modal show={selectedProduct === product} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{product.name}</Modal.Title>
                </Modal.Header>
                <img src={product.image} alt="" />
                <Modal.Body>#{product.productNumber}</Modal.Body>
                <Modal.Body>{product.description}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            )}
          </div>
        </div>
      ))
    : null;

  // Rendera varje produkt som definierats ovan.
  return <>{Object}</>;
}

export default Products;
