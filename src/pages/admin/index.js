import Header from "@/components/Reusable/Header/Header";
import Footer from "@/components/Reusable/Footer";
import { Fragment, use } from "react";
import styles from "./index.module.css";
import { connectToDB } from "@/lib/db";
import Sales from "@/components/AdminPage/Sales";
import AddNew from "@/components/AdminPage/AddNew";
import { useState } from "react";

const Admin = (props) => {
  const [salesShown, setSalesShown] = useState(true);
  const [addNewShown, setAddNewShown] = useState(false);

  function showSalesHandler() {
    setSalesShown(true);
    setAddNewShown(false);
  }

  function showAddNewHandler() {
    setAddNewShown(true);
    setSalesShown(false);
  }
  return (
    <Fragment>
      <div className={styles.blackBg}>
        <Header />
      </div>
      <div className="container">
        <div className={styles.menu}>
          <p
            className={`${styles.menuItem} ${
              salesShown ? styles.activeItem : null
            }`}
            onClick={showSalesHandler}
          >
            Sales
          </p>
          <p
            className={`${styles.menuItem} ${
              addNewShown ? styles.activeItem : null
            }`}
            onClick={showAddNewHandler}
          >
            Add new product
          </p>
        </div>
        <div className={styles.sectionContainer}>
          <AddNew shown={addNewShown} />
          <Sales shown={salesShown} products={props.products} />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Admin;

export async function getStaticProps(context) {
  const client = await connectToDB();
  const db = client.db("skateBoardCompany");
  const productCollection = db.collection("products");
  const products = await productCollection.find().toArray();

  client.close();

  return {
    props: {
      products: products.map((product) => ({
        id: product._id.toString(),
        productName: product.productName,
        price: product.price,
        type: product.type,
        sales: product.sales,
      })),
    },
  };
}
