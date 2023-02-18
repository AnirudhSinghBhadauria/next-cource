export const INITIAL_STATE = {
  notification: { title: "", status: "", message: "" },
  nStatus: false,
};

export const notificationReducer = (state, action) => {
  switch (action.type) {
    case "NOTIFICATION":
      return {
        ...state,
        notification: action.payload,
      };
    case "N-STATUS":
      return {
        ...state,
        nStatus: action.payload,
      };
    default:
      return state;
  }
};
