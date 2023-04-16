import styles from "./Header.module.css";
import { IoCartOutline } from "react-icons/io5";

import { IoPersonOutline, IoAlbumsOutline, IoHome } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Cart from "../Cart/Cart";
import Link from "next/link";
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  function hideMobileNav() {
    setIsMobile(false);
  }
  function hideCart() {
    setCartOpen(false);
  }
  function showCart() {
    setCartOpen(true);
    setIsMobile(false);
  }

  return (
    <div className={styles.headerContainer}>
      <Link href="/" className={styles.nextLink}>
        <p className={styles.logo}>MadDog Boards</p>
      </Link>
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
        <li className={styles.listItem} onClick={() => setCartOpen(true)}>
          <IoCartOutline className={styles.icon} />
          <p className={styles.listText}>Cart</p>
          <div className={styles.cartNumber}>3</div>
        </li>
        <li className={styles.listItem}>
          <IoPersonOutline className={styles.icon} />
          <p className={styles.listText}>Sign in</p>
        </li>
      </ul>

      <MobileNav
        shown={isMobile}
        onHide={hideMobileNav}
        onOpenCart={showCart}
      />
      <Cart shown={cartOpen} onHide={hideCart} />

      <div className={styles.mobileNavButton} onClick={() => setIsMobile(true)}>
        <IoMenu className={styles.icon} />
      </div>
    </div>
  );
};

export default Header;
