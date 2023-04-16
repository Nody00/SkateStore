import { CSSTransition } from "react-transition-group";
import styles from "./AddNew.module.css";

const AddNew = (props) => {
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
      <form className={styles.form}>
        <div className={styles.smallContainer}>
          <label htmlFor="pname">Product Name:</label>
          <input type="text" id="pname" name="productName" required />
        </div>
        <div className={styles.smallContainer}>
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" name="price" required />
        </div>
        <div className={styles.smallContainer}>
          <label htmlFor="type">Type:</label>
          <select required id="type">
            <option value="skateboard">SkateBoard</option>
          </select>
        </div>
        <div className={styles.smallContainer}>
          <label htmlFor="fimage">Front Image:</label>
          <input
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
