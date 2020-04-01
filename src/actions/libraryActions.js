import * as types from "../shared/types";

export const fetchSongsPending = () => {
  return {
    type: types.FETCH_SONGS_PENDING
  };
};

export const fetchSongsSuccess = songs => {
  return {
    type: types.FETCH_SONGS_SUCCESS,
    songs
  };
};

export const fetchSongsError = () => {
  return {
    type: types.FETCH_SONGS_ERROR
  };
};

export default {
  fetchSongsPending,
  fetchSongsSuccess,
  fetchSongsError
};
