import styles from "./InfoSection.module.css";

import { useInView } from "react-intersection-observer";
const InfoSection = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  console.log(inView);
  return (
    <div ref={ref} className={styles.infoSection}>
      <div
        className={`container ${inView ? styles.inView : null} ${
          styles.prepare
        }`}
      >
        <div className={styles.infoGrid}>
          {/* CARD 1 */}
          <div className={`${styles.imageContainer} ${styles.imageFirst}`}>
            <img src="/img1.jpg" className={styles.image} />
          </div>
          <div className={styles.textBox}>
            <p className={`${styles.smallTitle} ${styles.orangeColor}`}>
              Custom parts
            </p>
            <p className={styles.bigTitle}>Build and assemble your own board</p>
            <p className={styles.addedText}>
              Choose from a wide variety of boards,trunks and wheels
            </p>
            <button className={`${styles.rowButton} ${styles.orangeBg}`}>
              Learn more
            </button>
          </div>
          {/* CARD 1 */}
          {/* CARD 2 */}
          <div className={styles.textBox}>
            <p className={`${styles.smallTitle} ${styles.greenColor}`}>
              All kinds of boards
            </p>
            <p className={styles.bigTitle}>
              Find the board for your style of riding or cruising
            </p>
            <p className={styles.addedText}>
              We have a big collection of boards all shapes and sizes
            </p>
            <button className={`${styles.rowButton} ${styles.greenBg}`}>
              Learn more
            </button>
          </div>
          <div className={`${styles.imageContainer} ${styles.imageSecond}`}>
            <img src="/img2.jpg" className={styles.image} />
          </div>
          {/* CARD 2 */}
          {/* CARD 3 */}
          <div className={`${styles.imageContainer}  ${styles.imageThird}`}>
            <img src="/img3.jpg" className={styles.image} />
          </div>
          <div className={styles.textBox}>
            <p className={`${styles.smallTitle} ${styles.blueColor}`}>
              Clothing
            </p>
            <p className={styles.bigTitle}>
              Browse our fresh collection of tees,hoodies and jackets
            </p>
            <p className={styles.addedText}>
              Collection made in collaboration with NIKE&copy;
            </p>
            <button className={`${styles.rowButton} ${styles.blueBg}`}>
              Learn more
            </button>
          </div>
          {/* CARD 3 */}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
