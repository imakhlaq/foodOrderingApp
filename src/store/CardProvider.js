import CardContext from "./cart-context";
import { useReducer } from "react";

const cardReducerFn = (prevS, action) => {};

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(cardReducerFn, {});

  const addItemToCartHandler = (item) => {};

  const removeItemfromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemfromCartHandler,
  };

  return (
    <CardContext.Provider value={cartContext}>
      {props.children}
    </CardContext.Provider>
  );
};
export default CartProvider;
