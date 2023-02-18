import { Fragment } from "react";
import Notification from "../Notification/Notification";
import { useContext } from "react";
import { notificationContext } from "@/store/NotificationContext";
import MainHeader from "./main-header";

function Layout(props) {
  const { notification, nStatus } = useContext(notificationContext);
  const { title, message, status } = notification;
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {nStatus ? <Notification title={title} message={message} status={status} /> : ''}
    </Fragment>
  );
}

export default Layout;
