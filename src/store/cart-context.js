import { createContext } from "react";

const CardContext = createContext({
  item: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
export default CardContext;
