import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Vendors = () => {
  const { query, asPath } = useRouter();
  return (
    <Fragment>
      <Link href={`${asPath}/vendor1`}>vendor1</Link>
      <Link href={`${asPath}/vendor2`}>vendor2</Link>
      <Link href={`${asPath}/vendor3`}>vendor3</Link>
      <Link href={`${asPath}/vendor4`}>vendor4</Link>
    </Fragment>
  );
};

export default Vendors;
