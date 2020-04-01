import * as types from "../shared/types";

export const fetchPlaylistItemsPending = () => {
  return {
    type: types.FETCH_PLAYLIST_ITEMS_PENDING
  };
};

export const fetchPlaylistItemsSuccess = playlists => {
  return {
    type: types.FETCH_PLAYLIST_ITEMS_SUCCESS,
    playlists
  };
};

export const fetchSelectedPlaylist = playlist => {
  return {
    type: types.FETCH_SELECTED_PLAYLIST,
    playlist
  };
};

export const fetchPlaylistItemsError = () => {
  return {
    type: types.FETCH_PLAYLIST_ITEMS_ERROR
  };
};

export const addPlaylistItem = playlist => {
  return {
    type: types.ADD_PLAYLIST_ITEM,
    playlist
  };
};

export const fetchPlaylistSongsPending = () => {
  return {
    type: types.FETCH_PLAYLIST_SONGS_PENDING
  };
};

export const fetchPlaylistSongsSuccess = songs => {
  return {
    type: types.FETCH_PLAYLIST_SONGS_SUCCESS,
    songs
  };
};

export const fetchPlaylistSongsError = () => {
  return {
    type: types.FETCH_PLAYLIST_SONGS_ERROR
  };
};

export default {
  fetchPlaylistItemsSuccess,
  fetchPlaylistItemsError,
  fetchPlaylistItemsPending,
  addPlaylistItem,
  fetchPlaylistSongsPending,
  fetchPlaylistSongsSuccess,
  fetchPlaylistSongsError,
  fetchSelectedPlaylist
};
