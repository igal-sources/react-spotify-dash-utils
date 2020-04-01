import { useSelector } from "react-redux";

export const useUser = () => {
  const { user = {} } = useSelector(state => state.userReducer);
  return user;
};

export const useUserMail = () => {
  const { user: { email } = {} } = useSelector(state => state.userReducer);
  return email;
};

export const useUserName = () => {
  const { user: { display_name } = {} } = useSelector(state => state.userReducer);
  return display_name;
};

export const useUserId = () => {
  const { user: { id } = {} } = useSelector(state => state.currentUser);
  return id;
};

export const useToken = () => {
  const { token } = useSelector(state => state.tokenReducer);
  return token;
};

export const useArtistIds = () => {
  const { artistIds } = useSelector(state => state.artistsReducer);
  return artistIds;
};

export const useViewType = () => {
  const { title } = useSelector(state => state.uiReducer);
  return title;
};

export const useSongData = () => {
  const { songDetails: { songId } = {} } = useSelector(state => state.songsReducer);
  return songId;
};
