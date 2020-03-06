import { useSelector } from "react-redux";

export const useUserMail = () => {
  const { user = {} } = useSelector(state => state.currentUser);
  return user.email;
};

export const useUserName = () => {
  const { user = {} } = useSelector(state => state.currentUser);
  return user.display_name;
};

export const useUserId = () => {
  const { user = {} } = useSelector(state => state.currentUser);
  return user.id;
};

export const useToken = () => {
  const { token } = useSelector(state => state.tokenReducer);
  return token;
};

export const useArtistIds = () => {
  const { artistIds } = useSelector(state => state.artistsReducer);
  return artistIds;
};

export const useSelectedPlaylist = () => {
  const { playlist } = useSelector(state => state.playlistReducer);
  return playlist;
};
