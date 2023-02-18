import NotificationContextProvider, {
  notificationContext,
} from "@/store/NotificationContext";
import { useContext } from "react";
import Notification from "@/components/Notification/Notification";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
