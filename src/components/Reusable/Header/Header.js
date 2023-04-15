import styles from "./Header.module.css";
import { IoCartOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Cart from "../Cart/Cart";
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  function hideMobileNav() {
    setIsMobile(false);
  }
  function hideCart() {
    setCartOpen(false);
  }

  return (
    <div className={styles.headerContainer}>
      <p className={styles.logo}>MadDog Boards</p>
      <ul className={styles.navList}>
        <li className={styles.listItem} onClick={() => setCartOpen(true)}>
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
      </ul>

      <MobileNav shown={isMobile} onHide={hideMobileNav} />
      <Cart shown={cartOpen} onHide={hideCart} />

      <div className={styles.mobileNavButton} onClick={() => setIsMobile(true)}>
        <IoMenu className={styles.icon} />
      </div>
    </div>
  );
};

export default Header;