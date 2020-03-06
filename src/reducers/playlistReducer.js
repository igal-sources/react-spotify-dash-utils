export const playlistReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PLAYLIST_ITEMS_PENDING":
      return {
        fetchPlaylistPending: true,
        ...state
      };

    case "FETCH_PLAYLIST_ITEMS_SUCCESS":
      return {
        playlistMenu: action.playlists,
        playlists: action.playlists,
        fetchPlaylistError: false,
        fetchPlaylistPending: false,
        ...state
      };

    case "FETCH_SELECTED_PLAYLIST":
      return {
        playlist: action.playlist,
        ...state
      };

    case "ADD_PLAYLIST_ITEM":
      return {
        ...state,
        playlists: [...state.playlists, action.playlist]
      };

    case "FETCH_PLAYLIST_ITEMS_ERROR":
      return {
        fetchPlaylistError: true,
        fetchPlaylistPending: false,
        ...state
      };

    default:
      return state;
  }
};

export default playlistReducer;
