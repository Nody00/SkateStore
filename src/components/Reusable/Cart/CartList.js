import { CSSTransition } from "react-transition-group";
import styles from "./CartList.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const CartList = (props) => {
  const cartState = useSelector((state) => state.cart.cart);

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
        {cartState.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            front={item.front}
            back={item.back}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
    </CSSTransition>
  );
};

export default CartList;
