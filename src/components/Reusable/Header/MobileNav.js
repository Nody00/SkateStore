import styles from "./MobileNav.module.css";
import { IoCartOutline } from "react-icons/io5";
import { IoAlbumsOutline, IoSettingsOutline } from "react-icons/io5";
import { IoPersonOutline, IoCloseCircleOutline, IoHome } from "react-icons/io5";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import Modal from "@/components/UI/Modal";
import AuthForm from "../Auth/authForm";
import { useSession, signOut } from "next-auth/react";
const MobileNav = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { data: session, status } = useSession();
  function hideModal() {
    setModalOpen(false);
  }

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
            <div className={styles.cartNumber}>{props.cartItems}</div>
          </li>
          {!session && (
            <li className={styles.listItem} onClick={() => setModalOpen(true)}>
              <IoPersonOutline className={styles.icon} />
              <p className={styles.listText}>Sign in</p>
            </li>
          )}
          {session && (
            <li className={styles.listItem} onClick={() => signOut()}>
              <IoPersonOutline className={styles.icon} />
              <p className={styles.listText}>Sign out</p>
            </li>
          )}
          {session && session.user.email === "admin00@gmail.com" && (
            <Link href="/admin" className={styles.nextLink}>
              <li className={styles.listItem}>
                <IoSettingsOutline className={styles.icon} />
                <p className={styles.listText}>Admin page</p>
              </li>
            </Link>
          )}
          <li className={styles.listItem} onClick={() => props.onHide()}>
            <IoCloseCircleOutline className={styles.icon} />
          </li>
        </ul>

        {modalOpen && (
          <Modal onHide={hideModal}>
            <AuthForm onHide={hideModal} />
          </Modal>
        )}
      </div>
    </CSSTransition>
  );
};

export default MobileNav;
