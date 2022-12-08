import classes from "./HeaderCardButton.module.css";
import CardIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CardContext from "../../store/cart-context";

const HeaderCardButton = (props) => {
  const cartCtx = useContext(CardContext);
  const numberOfCartItems = cartCtx.items.reduce((acc, i) => acc + i.amount, 0);

  return (
    <button className={classes.button} onClick={props.onOpenCart}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCardButton;
