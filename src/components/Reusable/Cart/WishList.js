import { CSSTransition } from "react-transition-group";
import styles from "./WishList.module.css";
import CartItem from "./CartItem";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { replaceWishList } from "@/features/cart/cartSlice";
const WishList = (props) => {
  const { data: session, status } = useSession();
  const wishList = useSelector((state) => state.cart.wishList);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getWishList() {
      if (session) {
        // SEND REQUEST TO API

        const result = await fetch("/api/get-wishlist", {
          method: "POST",
          body: JSON.stringify({ email: session.user.email }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const wishList = await result.json();

        console.log(wishList);
        if (wishList) {
          dispatch(replaceWishList(wishList));
        }
      }
    }
    getWishList();
  }, [session]);

  return (
    <CSSTransition
      in={props.shown}
      timeout={300}
      unmountOnExit
      mountOnEnter
      classNames={{
        enter: "",
        enterActive: styles.enterActive,
        exit: "",
        exitActive: styles.exitActive,
      }}
    >
      <div className={styles.wishListContainer}>
        {wishList?.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            front={item.front}
            back={item.back}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            wishList={true}
          />
        ))}
      </div>
    </CSSTransition>
  );
};

export default WishList;
