import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CardProvider";
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
    <CartProvider>
      <Header onOpenCart={openCart}/>
      <main>
        {cartState && <Cart onCloseCart={closeCart} />}
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
