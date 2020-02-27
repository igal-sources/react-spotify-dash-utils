import { StoreContext } from "../services/store";

export const useUserName = () => {
  const store = React.useContext(StoreContext);
  return store.userName;
};


