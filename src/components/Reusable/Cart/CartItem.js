import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={styles.cartItemContainer}>
      <img
        src="https://i.ibb.co/sVcXH9t/6-front.jpg"
        alt=""
        className={styles.image}
      />

      <div className={styles.cartItemTextBox}>
        <div className={styles.smallContainer}>
          <p className={styles.nameLabel}>Name:</p>
          <p className={styles.name}>Girl 8inch skateboard</p>
        </div>
        <div className={styles.smallContainer}>
          <p className={styles.priceLabel}>Price:</p>
          <p className={styles.price}>80$</p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.buyBtn}>Details</button>
        <button className={styles.removeBtn}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
