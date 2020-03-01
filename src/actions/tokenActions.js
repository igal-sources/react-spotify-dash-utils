const setToken = token => {
  return {
    type: "SET_TOKEN",
    payload: token
  };
};

export default { setToken };
