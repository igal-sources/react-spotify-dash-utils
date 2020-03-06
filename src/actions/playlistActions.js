export const fetchPlaylistItemsPending = () => {
  return {
    type: "FETCH_PLAYLIST_ITEMS_PENDING"
  };
};

export const fetchPlaylistItemsSuccess = playlists => {
  return {
    type: "FETCH_PLAYLIST_ITEMS_SUCCESS",
    playlists
  };
};

export const fetchSelectedPlaylist = playlist => {
  return {
    type: "FETCH_SELECTED_PLAYLIST",
    playlist
  };
};

export const fetchPlaylistItemsError = () => {
  return {
    type: "FETCH_PLAYLIST_ITEMS_ERROR"
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
  fetchPlaylistMenuSuccess: fetchPlaylistItemsSuccess,
  fetchPlaylistMenuError: fetchPlaylistItemsError,
  addPlaylistItem,
  fetchPlaylistSongsSuccess,
  fetchPlaylistSongsError,
  fetchSelectedPlaylist
};
