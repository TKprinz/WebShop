import "./App.css";
import Search from "./Components/Search";
import { CartProvider } from "./CartContext";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Search />
        <ShoppingCart />
      </CartProvider>
    </div>
  );
}

export default App;
