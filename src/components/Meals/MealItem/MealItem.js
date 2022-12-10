import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CardContext from "../../../store/cart-context";

const MeaslItem = (props) => {
  const cartCtx = useContext(CardContext);
  const price = `$ ${props.price.toFixed(2)}`;

  const addToCart = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.discription}>{props.discription}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCart} />
      </div>
    </li>
  );
};
export default MeaslItem;
