import styles from "./ProductItem.module.css";
import { useState } from "react";
const ProductItem = (props) => {
  const [front, setFront] = useState(true);

  return (
    <div className={styles.cartItemContainer}>
      <img
        src={front ? props.front : props.back}
        alt=""
        className={styles.image}
        onMouseEnter={() => setFront(false)}
        onMouseLeave={() => setFront(true)}
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
          <p className={styles.priceLabel}>Type:</p>
          <p className={styles.type}>{props.type}</p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.btnAdd}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
