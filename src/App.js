import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartState, setCartState] = useState(false);

  const closeCart = () => {
    setCartState(false);
  };
  const openCart = () => {
    setCartState(true);
  };
  return (
    <>
      <Header />
      <main>
        {cartState && <Cart />}
        <Meals />
      </main>
    </>
  );
}

export default App;
