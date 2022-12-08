import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartState, setCartState] = useState(true);

  const closeCart = () => {
    setCartState(false);
  };
  const openCart = () => {
    setCartState(true);
  };
  return (
    <>
      <Header onOpenCart={openCart}/>
      <main>
        {cartState && <Cart onCloseCart={closeCart} />}
        <Meals />
      </main>
    </>
  );
}

export default App;
