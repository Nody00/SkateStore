import styles from "./CardSection.module.css";
import { useInView } from "react-intersection-observer";
const CardSection = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <div
      ref={ref}
      className={`${styles.cardSection} ${inView ? styles.inView : null} ${
        styles.prepare
      }`}
    >
      <div className="container">
        <div className={styles.cardGrid}>
          {/* CARD 1 */}

          <div className={styles.cardContainer1}>
            <div className={styles.content}>
              <p className={styles.cardTextSmall}>Skateboards</p>
              <p className={styles.cardTextBig}>Check out our boards</p>
              <button className={styles.cardButton}>All boards</button>
            </div>
          </div>

          {/*  */}
          {/* CARD 2 */}
          <div className={styles.cardContainer2}>
            <div className={styles.content}>
              <p className={styles.cardTextSmall2}>Clothing</p>
              <p className={styles.cardTextBig2}>Check out our clothing line</p>
              <button className={styles.cardButton}>All clothing</button>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
