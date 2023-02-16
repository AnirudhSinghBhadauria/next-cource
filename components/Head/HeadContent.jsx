import React from "react";
import Head from "next/head";

const HeadContent = ({ name, content, title }) => {
  return (
    <Head>
      <title>{title ? title : ""}</title>
      <meta name={name ? name : ""} content={content ? content : ""} />
    </Head>
  );
};

export default HeadContent;
