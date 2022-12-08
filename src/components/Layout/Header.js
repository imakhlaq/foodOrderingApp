import mealsImg from "../../assests/meals.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCardButton onOpenCart={props.onOpenCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Food on table" />
      </div>
    </>
  );
};
export default Header;
