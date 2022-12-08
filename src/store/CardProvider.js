import CardContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cardReducerFn = (prevS, action) => {
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cardState, dispatch] = useReducer(cardReducerFn, defaultCartState);

  const addItemToCartHandler = (item) => {};

  const removeItemfromCartHandler = (id) => {};

  const cartContext = {
    items: defaultCartState.items,
    totalAmount: defaultCartState.totalAmount,
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
