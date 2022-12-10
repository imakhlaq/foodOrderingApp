import classes from "./MealItemform.module.css";
import Input from "../../UI/Input";
import { useState, useRef } from "react";
const MealItemForm = (props) => {
  const [formState, setFormState] = useState(true);
  const amountInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enterdAmount = +amountInput.current.value;

    if (
      enterdAmount.trim().length === 0 ||
      enterdAmount < 1 ||
      enterdAmount > 5
    ) {
      setFormState(false);
      return;
    }

    props.onAddToCart(enterdAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInput}
        label="Amount"
        input={{
          id: "amunt",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!formState && <p>Please Enter valid Inputs</p>}
    </form>
  );
};
export default MealItemForm;
