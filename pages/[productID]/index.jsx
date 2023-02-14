import React, { Fragment } from "react";
import path from "path";
import fs from "fs/promises";

const ProductDetail = ({ product }) => {
  const { title, description } = product;

  return (
    <Fragment>
      <h1>{title}</h1>
      <p>{description}</p>
    </Fragment>
  );
};

export default ProductDetail;

export async function getStaticProps({ params }) {
  const { productID } = params;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const specificProduct = data.find((product) => product.id === productID);

  return { props: { product: specificProduct } };
}
