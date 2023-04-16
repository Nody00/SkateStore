import styles from "./Cart.module.css";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import CartList from "./CartList";
import WishList from "./WishList";
import { IoCloseCircleOutline } from "react-icons/io5";
const Cart = (props) => {
  const [showCartList, setCartList] = useState(true);
  const [showWishList, setWishList] = useState(false);

  function showCartListHandler() {
    setWishList(false);
    setCartList(true);
  }

  function showWishListHandler() {
    setCartList(false);
    setWishList(true);
  }

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
          <p
            className={`${styles.menuText} ${
              showCartList ? styles.menuTextActive : null
            }`}
            onClick={showCartListHandler}
          >
            Cart
          </p>
          <p
            className={`${styles.menuText} ${
              showWishList ? styles.menuTextActive : null
            }`}
            onClick={showWishListHandler}
          >
            WishList
          </p>
          <button className={styles.menuButton} onClick={() => props.onHide()}>
            <IoCloseCircleOutline className={styles.menuIcon} />
          </button>
        </div>

        {showCartList && (
          <div className={styles.totalContainer}>
            <div className={styles.totalTextBox}>
              <p className={styles.totalText}>Cart Total:</p>
              <p className={styles.total}>300$</p>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.buyAllBtn}>Buy All</button>
            </div>
          </div>
        )}

        <CartList shown={showCartList} />
        <WishList shown={showWishList} />
      </div>
    </CSSTransition>
  );
};

export default Cart;
