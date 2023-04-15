import styles from "./Cart.module.css";
import { CSSTransition } from "react-transition-group";
const Cart = (props) => {
  return (
    <CSSTransition
      in={props.shown}
      timeout={300}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: styles.enterActive,
        exit: "",
        exitActive: styles.exitActive,
      }}
    >
      <div className={styles.cartContainer}>
        <div className={styles.menu}>
          <div>Cart</div>
          <div>Wishlist</div>
          <button onClick={() => props.onHide()}>CLOSE CART</button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Cart;
