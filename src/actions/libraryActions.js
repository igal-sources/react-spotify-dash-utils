export const fetchSongsPending = () => {
  return {
    type: "FETCH_SONGS_PENDING"
  };
};

export const fetchSongsSuccess = songs => {
  return {
    type: "FETCH_SONGS_SUCCESS",
    songs
  };
};

export const fetchSongsError = () => {
  return {
    type: "FETCH_SONGS_ERROR"
  };
};

export const updateViewType = view => {
  return {
    type: "UPDATE_VIEW_TYPE",
    view
  };
};

export default { fetchSongsPending, fetchSongsSuccess, updateViewType };
