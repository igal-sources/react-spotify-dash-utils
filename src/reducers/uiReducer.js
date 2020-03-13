const defaultState = {
  title: "Home"
};

export const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_VIEW_TYPE":
      return {
        ...state,
        title: action.title
      };
    default:
      return state;
  }
};

export default uiReducer;
