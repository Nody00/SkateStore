import styles from "./Header.module.css";
import { IoCartOutline } from "react-icons/io5";

import {
  IoPersonOutline,
  IoAlbumsOutline,
  IoHome,
  IoSettingsOutline,
} from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Cart from "../Cart/Cart";
import Link from "next/link";

import Modal from "@/components/UI/Modal";
import AuthForm from "../Auth/authForm";
import { useSession, signOut } from "next-auth/react";

import { useSelector } from "react-redux";
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { data: session, status } = useSession();
  // console.log(session);
  const cartState = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  // console.log(session, status);
  function showModal() {
    setCartOpen(false);
    setModalOpen(true);
  }

  function hideModal() {
    setModalOpen(false);
  }

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
        {/* {session && (
          <li className={styles.listItem}>
            <IoAlbumsOutline className={styles.icon} />
            <p className={styles.listText}>{session.user.email}</p>
          </li>
        )} */}
        {session && session.user.email === "admin00@gmail.com" && (
          <Link href="/admin" className={styles.nextLink}>
            <li className={styles.listItem}>
              <IoSettingsOutline className={styles.icon} />
              <p className={styles.listText}>Admin Page</p>
            </li>
          </Link>
        )}
        <li className={styles.listItem} onClick={() => setCartOpen(true)}>
          <IoCartOutline className={styles.icon} />
          <p className={styles.listText}>Cart</p>
          <div className={styles.cartNumber}>{total}</div>
        </li>
        {!session && (
          <li className={styles.listItem} onClick={showModal}>
            <IoPersonOutline className={styles.icon} />
            <p className={styles.listText}>Sign in</p>
          </li>
        )}
        {session && (
          <li
            className={styles.listItemSignout}
            onClick={() => {
              signOut();
            }}
          >
            <IoPersonOutline className={styles.icon} />
            <p className={styles.listText}>Sign out</p>
          </li>
        )}
      </ul>

      {modalOpen && (
        <Modal onHide={hideModal}>
          <AuthForm onHide={hideModal} />
        </Modal>
      )}

      <MobileNav
        shown={isMobile}
        onHide={hideMobileNav}
        onOpenCart={showCart}
        cartItems={cartState.length}
      />
      <Cart shown={cartOpen} onHide={hideCart} />

      <div className={styles.mobileNavButton} onClick={() => setIsMobile(true)}>
        <IoMenu className={styles.icon} />
      </div>
    </div>
  );
};

export default Header;
