import Layout from "../components/layout/layout";
import "../styles/globals.css";
import HeadContent from "@/components/Head/HeadContent";
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <HeadContent
        title="NEXT | Events"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
