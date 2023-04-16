import styles from "./MobileNav.module.css";
import { IoCartOutline } from "react-icons/io5";
import { IoAlbumsOutline } from "react-icons/io5";
import { IoPersonOutline, IoCloseCircleOutline, IoHome } from "react-icons/io5";
import Link from "next/link";
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
          <Link href="/" className={styles.nextLink}>
            <li className={styles.listItem}>
              <IoHome className={styles.icon} />
              <p className={styles.listText}>Home</p>
            </li>
          </Link>
          <Link href="/allProducts" className={styles.nextLink}>
            <li className={styles.listItem}>
              <IoAlbumsOutline className={styles.icon} />
              <p className={styles.listText}>All products</p>
            </li>
          </Link>
          <li className={styles.listItem} onClick={() => props.onOpenCart()}>
            <IoCartOutline className={styles.icon} />
            <p className={styles.listText}>Cart</p>
            <div className={styles.cartNumber}>3</div>
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
