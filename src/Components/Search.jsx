import React, { useState } from "react";
import Products from "./Products";
import data from "../Rolex-list.json";

function Search() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  function SearchObject() {
    // Uppdatera products baserat på söksträngen search.
    const filteredProducts = data.filter(
      (data) =>
        (data.name && data.name.toLowerCase().includes(search.toLowerCase())) ||
        (data.description &&
          data.description.toLowerCase().includes(search.toLowerCase()))
    );

    setProducts(filteredProducts);
  }

  const handleSearch = (event) => {
    // Uppdatera söksträngen search med text från input-fältet.
    setSearch(event.target.value);
  };

  return (
    <div>
      <div className="wholeSearchBar">
        <h1 className="rubrik">Rolex</h1>
        <input
          className="searchBar"
          type="text"
          value={search}
          onChange={handleSearch}
        />
        <button className="searchBtn" onClick={SearchObject}>
          Sök
        </button>
      </div>
      <div className="products">
        <Products product={products} />
      </div>
    </div>
  );
}

export default Search;
