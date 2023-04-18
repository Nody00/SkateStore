import styles from "./CartItem.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/features/cart/cartSlice";

const CartItem = (props) => {
  const [front, setFront] = useState(true);
  const dispatch = useDispatch();

  function removeHandler() {
    dispatch(removeFromCart(props.id));
  }

  return (
    <div className={styles.cartItemContainer}>
      <img
        src={front ? props.front : props.back}
        alt=""
        className={styles.image}
        onMouseEnter={() => {
          setFront(false);
        }}
        onMouseLeave={() => {
          setFront(true);
        }}
      />

      <div className={styles.cartItemTextBox}>
        <div className={styles.smallContainer}>
          <p className={styles.nameLabel}>Name:</p>
          <p className={styles.name}>{props.name}</p>
        </div>
        <div className={styles.smallContainer}>
          <p className={styles.priceLabel}>Price:</p>
          <p className={styles.price}>{props.price}$</p>
        </div>
        <div className={styles.smallContainer}>
          <p className={styles.priceLabel}>Quantity:</p>
          <p className={styles.price}>{props.quantity}</p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.buyBtn}>Details</button>
        <button className={styles.removeBtn} onClick={removeHandler}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
