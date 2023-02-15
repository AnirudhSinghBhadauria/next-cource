import React, { useEffect, useState } from "react";
import useSWR from "swr";

const LastSales = (sale) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const [sales, setSales] = useState(sale.sales);

  const { data, isLoading } = useSWR(
    "https://next-js-course-8aa6a-default-rtdb.firebaseio.com/sales.json",
    fetcher
  );

  useEffect(() => {
    if (data) {
      const transformSales = [];

      for (const key in data) {
        transformSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(transformSales);
    }
  }, [data]);

  if (isLoading) return <p>loading...</p>;

  return (
    <ul>
      {sales.map((sales) => (
        <li key={sales.id}>
          {sales.username}-{sales.volume}
        </li>
      ))}
    </ul>
  );
};

export default LastSales;

export async function getStaticProps() {
  const response = await fetch(
    "https://next-js-course-8aa6a-default-rtdb.firebaseio.com/sales.json"
  );
  const fSales = await response.json();

  const transformSales = [];

  for (const key in fSales) {
    transformSales.push({
      id: key,
      username: fSales[key].username,
      volume: fSales[key].volume,
    });
  }

  return {
    props: { sales: transformSales },
    revalidate: 10,
  };
}
