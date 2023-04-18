import styles from "./ProductItem.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, addToWishList } from "@/features/cart/cartSlice";
import { IoStar } from "react-icons/io5";
import { useSession } from "next-auth/react";
const ProductItem = (props) => {
  const [front, setFront] = useState(true);
  const dispatch = useDispatch();
  const { data: session, status } = useSession();
  function addToCartHandler() {
    const item = {
      front: props.front,
      back: props.back,
      name: props.name,
      id: props.id,
      price: props.price,
      type: props.type,
    };

    dispatch(addToCart(item));
  }

  async function wishListHandler() {
    const wishListItem = {
      front: props.front,
      back: props.back,
      name: props.name,
      id: props.id,
      price: props.price,
      type: props.type,
    };

    // send an api request to add wishlist item to user account in db

    if (session) {
      //send that api request
      const response = await fetch("/api/addto-wishlist", {
        method: "POST",
        body: JSON.stringify({ userEmail: session.user.email, wishListItem }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resData = await response.json();
      console.log(resData);
    }

    dispatch(addToWishList(wishListItem));
  }

  return (
    <div className={styles.cartItemContainer}>
      <img
        src={front ? props.front : props.back}
        alt=""
        className={styles.image}
        onMouseEnter={() => setFront(false)}
        onMouseLeave={() => setFront(true)}
      />
      <div className={styles.wishlistStar} onClick={wishListHandler}>
        <IoStar className={styles.wishListIcon} />
      </div>
      <div className={styles.cartItemTextBox}>
        <div className={styles.smallContainer}>
          <p className={styles.nameLabel}>Name:</p>
          <p className={styles.name}>{props.name}</p>
        </div>
        <div className={styles.smallContainer}>
          <p className={styles.priceLabel}>Price:</p>
          <p className={styles.price}>{props.price}$</p>
        </div>
        <div className={styles.smallContainer}>
          <p className={styles.priceLabel}>Type:</p>
          <p className={styles.type}>{props.type}</p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.btnAdd} onClick={addToCartHandler}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
