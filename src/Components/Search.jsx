import React, { useState } from "react";
import Products from "./Products";
import data from "../Rolex-list.json";

function Search() {
  // Definierar två states med useState-hook: search och products.
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  function SearchObject() {
    // Filterar Rolex-listan baserat på namn och beskrivning som innehåller sökordet.
    const filteredProducts = data.filter(
      (data) =>
        (data.name && data.name.toLowerCase().includes(search.toLowerCase())) ||
        (data.description &&
          data.description.toLowerCase().includes(search.toLowerCase()))
    );

    // Uppdaterar Products Staten med filtrerade produkter.
    setProducts(filteredProducts);
  }

  // Uppdaterar Search Staten när sökfältet ändras.
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  // Rendera JSX-kod för sökfält, sökknapp och produkter baserat på sökresultaten.
  return (
    <div>
      <div className="wholeSearchBar">
        <h1 className="rubrik">The Magic Rolex</h1>
        <input
          className="searchBar"
          type="text"
          value={search}
          onChange={handleSearch}
        />
        <div className="searchBtnWhole">
          <button className="searchBtn" onClick={SearchObject}>
            Sök
          </button>
        </div>
      </div>
      <div className="products">
        <Products product={products} />
      </div>
    </div>
  );
}

export default Search;
