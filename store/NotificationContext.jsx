import { createContext, useReducer } from "react";
import { notificationReducer, INITIAL_STATE } from "./notificationReducer";

export const notificationContext = createContext(null);

const NotificationContextProvider = (props) => {
  const [state, dispatch] = useReducer(notificationReducer, INITIAL_STATE);

  const { notification, nStatus } = state;
  const { title, message, status } = notification;

  const changeNotification = (status) =>
    dispatch({ type: "NOTIFICATION", payload: status });

  const changeNStatus = (status) =>
    dispatch({ type: "N-STATUS", payload: status });

  const value = {
    notification: { title: title, message: message, status: status },
    nStatus: nStatus,
    changeNStatus,
    changeNotification,
  };

  return (
    <notificationContext.Provider value={value}>
      {props.children}
    </notificationContext.Provider>
  );
};

export default NotificationContextProvider;
