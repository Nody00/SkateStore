import Header from "@/components/Reusable/Header/Header";
import Footer from "@/components/Reusable/Footer";
import { Fragment } from "react";
import styles from "./index.module.css";
import { connectToDB } from "@/lib/db";
import ProductItem from "@/components/Reusable/Products/ProductItem";
const AllProducts = (props) => {
  return (
    <Fragment>
      <div className={styles.blackBg}>
        <Header />
      </div>
      <div className="container">
        <div className={styles.menu}>
          <label htmlFor="sortPrice">Sort by price:</label>
          <select id="sortPrice">
            <option value="" key="1">
              Select one
            </option>
            <option value="" key="2">
              Highest
            </option>
            <option value="" key="3">
              Lowest
            </option>
          </select>
        </div>
        <div className={styles.productsContainer}>
          {props.products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              name={product.productName}
              price={product.price}
              front={product.front}
              back={product.back}
              type={product.type}
            />
          ))}
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default AllProducts;

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
        front: product.front,
        back: product.back,
      })),
    },
  };
}
