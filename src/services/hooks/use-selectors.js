import { useSelector } from "react-redux";

export const useUserMail = () => {
  const { user = {} } = useSelector(state => state.currentUser);
  return user.email;
};

export const useUserName = () => {
  const { user = {} } = useSelector(state => state.currentUser);
  return user.display_name;
};