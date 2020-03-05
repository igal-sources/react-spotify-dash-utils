export const fetchPlaylistMenuPending = () => {
  return {
    type: "FETCH_PLAYLIST_MENU_PENDING"
  };
};

export const fetchPlaylistMenuSuccess = playlists => {
  return {
    type: "FETCH_PLAYLIST_MENU_SUCCESS",
    playlists
  };
};

export const fetchPlaylistMenuError = () => {
  return {
    type: "FETCH_PLAYLIST_MENU_ERROR"
  };
};

export const addPlaylistItem = playlist => {
  return {
    type: "ADD_PLAYLIST_ITEM",
    playlist
  };
};

export const fetchPlaylistSongsPending = () => {
  return {
    type: "FETCH_PLAYLIST_SONGS_PENDING"
  };
};

export const fetchPlaylistSongsSuccess = songs => {
  return {
    type: "FETCH_PLAYLIST_SONGS_SUCCESS",
    songs
  };
};

export const fetchPlaylistSongsError = () => {
  return {
    type: "FETCH_PLAYLIST_SONGS_ERROR"
  };
};

export default {
  fetchPlaylistMenuSuccess,
  fetchPlaylistMenuError,
  addPlaylistItem,
  fetchPlaylistSongsSuccess,
  fetchPlaylistSongsError
};
