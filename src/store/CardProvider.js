import CardContext from "./cart-context";

const CartProvider = (props) => {
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
