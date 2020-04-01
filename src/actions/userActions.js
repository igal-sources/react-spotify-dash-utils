import * as types from "../shared/types";

const setUser = userObj => {
  return {
    type: types.SET_USER,
    payload: userObj
  };
};

const logOut = () => {
  return {
    type: types.LOG_OUT
  };
};

export default { setUser, logOut };
