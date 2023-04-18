import { CSSTransition } from "react-transition-group";
import styles from "./AddNew.module.css";
import { useRef } from "react";

const AddNew = (props) => {
  const nameRef = useRef();
  const priceRef = useRef();
  const typeRef = useRef();
  const frontImageRef = useRef();
  const backImageRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();

    const nameValue = nameRef.current.value;
    const priceValue = priceRef.current.value;
    const typeValue = typeRef.current.value;
    const frontImageValue = frontImageRef.current.value;
    const backImageValue = backImageRef.current.value;

    // send a request to an api route

    const response = await fetch("/api/add-product", {
      method: "POST",
      body: JSON.stringify({
        name: nameValue,
        price: priceValue,
        front: frontImageValue,
        back: backImageValue,
        type: typeValue,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.log("error with request", response);
      return;
    }

    const resData = await response.json();
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
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.smallContainer}>
          <label htmlFor="pname">Product Name:</label>
          <input
            ref={nameRef}
            type="text"
            id="pname"
            name="productName"
            required
            maxLength={35}
          />
        </div>
        <div className={styles.smallContainer}>
          <label htmlFor="price">Price:</label>
          <input
            ref={priceRef}
            type="text"
            id="price"
            name="price"
            required
            maxLength={3}
          />
        </div>
        <div className={styles.smallContainer}>
          <label htmlFor="type">Type:</label>
          <select ref={typeRef} required id="type">
            <option value="skateboard">SkateBoard</option>
          </select>
        </div>
        <div className={styles.smallContainer}>
          <label htmlFor="fimage">Front Image:</label>
          <input
            ref={frontImageRef}
            type="text"
            id="fimage"
            name="fimage"
            required
            placeholder="Provide a link"
          />
        </div>
        <div className={styles.smallContainer}>
          <label htmlFor="bimage">Back Image:</label>
          <input
            ref={backImageRef}
            type="text"
            id="bimage"
            name="bimage"
            required
            placeholder="Provide a link"
          />
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.buttonSubmit}>Submit</button>
        </div>
      </form>
    </CSSTransition>
  );
};

export default AddNew;
