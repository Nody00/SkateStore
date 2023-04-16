import { CSSTransition } from "react-transition-group";
import styles from "./WishList.module.css";
import CartItem from "./CartItem";
const WishList = (props) => {
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
      <div className={styles.wishListContainer}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </CSSTransition>
  );
};

export default WishList;
