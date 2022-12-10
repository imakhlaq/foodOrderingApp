import CardContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cardReducerFn = (prevS, action) => {
  if (action.type === "ADD") {
    const upatedItems = prevS.items.concat(action.item);
    const updatedPrice =
      prevS.totalAmount + action.item.price * action.item.amount;
    return {
      items: upatedItems,
      totalAmount: updatedPrice,
    };
  }
  if (action.type === "REMOVE") {
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cardState, dispatch] = useReducer(cardReducerFn, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", item });
  };

  const removeItemfromCartHandler = (id) => {
    dispatch({ type: "REMOVE", id });
  };

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
