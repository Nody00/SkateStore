import styles from "./SalesItem.module.css";

const SalesItem = (props) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.smallContainer}>
        <p className={styles.text}>Title:</p>
        <p className={styles.propTitle}>{props.name}</p>
      </div>
      <div className={styles.smallContainer}>
        <p className={styles.text}>Type:</p>
        <p className={styles.propType}>{props.type}</p>
      </div>
      <div className={styles.smallContainer}>
        <p className={styles.text}>Price:</p>
        <p className={styles.propPrice}>{props.price}$</p>
      </div>
      <div className={styles.smallContainer}>
        <p className={styles.text}>Sales</p>
        <p className={styles.propSales}>{props.sales}</p>
      </div>
    </div>
  );
};

export default SalesItem;
