import React from "react";
import path from "path";
import fs from "fs/promises";
import Link from 'next/link'

const HomePage = (props) => {
  const {loadedProducts} = props;
  return (
    <ul>
      {loadedProducts.map(({ id, title }) => {
        return <Link href={`/product/${id}`} key={id}>{title}</Link>;
      })}
    </ul>
  );
};

export default HomePage;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      loadedProducts: data.products,
    },
    revalidate: 10,
  };
}
