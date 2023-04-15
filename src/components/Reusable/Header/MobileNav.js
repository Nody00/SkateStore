import styles from "./MobileNav.module.css";
import { IoCartOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoPersonOutline, IoCloseCircleOutline } from "react-icons/io5";

import { CSSTransition } from "react-transition-group";
const MobileNav = (props) => {
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
      <div className={styles.mobileNavContainer}>
        <ul className={styles.navList}>
          <li className={styles.listItem}>
            <IoCartOutline className={styles.icon} />
            <p className={styles.listText}>Cart</p>
            <div className={styles.cartNumber}>3</div>
          </li>
          <li className={styles.listItem}>
            <IoHeartOutline className={styles.icon} />
            <p className={styles.listText}>Wishlist</p>
          </li>
          <li className={styles.listItem}>
            <IoPersonOutline className={styles.icon} />
            <p className={styles.listText}>Sign in</p>
          </li>
          <li className={styles.listItem} onClick={() => props.onHide()}>
            <IoCloseCircleOutline className={styles.icon} />
          </li>
        </ul>
      </div>
    </CSSTransition>
  );
};

export default MobileNav;
