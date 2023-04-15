import Header from "../Reusable/Header/Header";
import styles from "./Hero.module.css";
import { Fragment } from "react";

const Hero = () => {
  return (
    <div className={styles.heroImage}>
      <Header />
      <main className="container">
        <div className={styles.heroTextBox}>
          <p className={styles.smallText}>Brand new board selection</p>
          <p className={styles.bigText}>Where there's Light, there's Dark</p>
          <div className={styles.buttonContainer}>
            <button className={styles.buttonPrimary}>Buy now</button>
            <button className={styles.buttonSecondary}>Learn more</button>
          </div>
        </div>
        <div></div>
      </main>
    </div>
  );
};

export default Hero;
