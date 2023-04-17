import { CSSTransition } from "react-transition-group";
import styles from "./Sales.module.css";
import SalesItem from "./SalesItem";
const Sales = (props) => {
  // console.log(props);
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
      <div className={styles.salesContainer}>
        {props.products.map((product) => (
          <SalesItem
            key={product.id}
            name={product.productName}
            type={product.type}
            sales={product.sales}
            price={product.price}
          />
        ))}
      </div>
    </CSSTransition>
  );
};

export default Sales;
