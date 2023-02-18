export const INITIAL_STATE = {
  notification: { title: "", status: '', message: "" },
  nStatus: false,
};

export const notificationReducer = (state, action) => {
  switch (action.type) {
    case "NOTIFICATION":
      return {
        notification: action.payload,
        ...state,
      };
    case "N-STATUS":
      return {
        nStatus: action.payload,
        ...state,
      };
    default:
      return state;
  }
};
