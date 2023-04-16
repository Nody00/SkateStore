import { CSSTransition } from "react-transition-group";
import styles from "./CartList.module.css";
import CartItem from "./CartItem";
const CartList = (props) => {
  return (
    <CSSTransition
      in={props.shown}
      timeout={300}
      unmountOnExit
      mountOnEnter
      classNames={{
        enter: "",
        enterActive: styles.enterActive,
        exit: "",
        exitActive: styles.exitActive,
      }}
    >
      <div className={styles.cartListContainer}>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </CSSTransition>
  );
};

export default CartList;
