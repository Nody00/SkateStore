import styles from "./AdditionalInfo.module.css";
import { FaTruck, FaHeadset, FaSnowboarding } from "react-icons/fa";
const AdditionalInfo = () => {
  return (
    <div className={styles.containerGrid}>
      <div className={styles.item}>
        <div className={styles.itemBox}>
          <FaTruck className={styles.icon} />
          <p className={styles.text}>Free returns, no questions asked</p>
        </div>
        <p className={styles.itemLink}>Learn more</p>
      </div>

      <div className={styles.item}>
        <div className={styles.itemBox}>
          <FaHeadset className={styles.icon} />
          <p className={styles.text}>Need help? We're here for you</p>
        </div>
        <p className={styles.itemLink}>Contact us</p>
      </div>

      <div className={styles.item}>
        <div className={styles.itemBox}>
          <FaSnowboarding className={styles.icon} />
          <p className={styles.text}>"Better than the best" - The Verge</p>
        </div>
        <p className={styles.itemLink}>Read article</p>
      </div>
    </div>
  );
};

export default AdditionalInfo;
