import * as types from "../shared/types";

const setToken = token => {
  return {
    type: types.SET_TOKEN,
    payload: token
  };
};

export default { setToken };
