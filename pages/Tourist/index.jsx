import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ParticularCategory = () => {
  const { asPath, query } = useRouter();

  return (
    <Fragment>
      <Link href={`${asPath}/item1`}>item1</Link>
      <Link href={`${asPath}/item2`}>item2</Link>
      <Link href={`${asPath}/item3`}>item3</Link>
      <Link href={`${asPath}/item4`}>item4</Link>
      <Link href={`${asPath}/item5`}>item5</Link>
      <Link href={`${asPath}/item6`}>item6</Link>
      <Link href={`${asPath}/item7`}>item7</Link>
    </Fragment>
  );
};

export default ParticularCategory;