import classes from "./Model.module.css";
import { createPortal } from "react-dom";
const BackDrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onBackdropClick}></div>
  );
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const modelWindow = document.getElementById("overlays");
const Model = (props) => {
  return (
    <>
      {createPortal(
        <BackDrop onBackdropClick={props.onBackdropClick} />,
        modelWindow
      )}
      {createPortal(<Overlay>{props.children}</Overlay>, modelWindow)}
    </>
  );
};
export default Model;
