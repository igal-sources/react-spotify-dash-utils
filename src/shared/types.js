// Links
export const ALBUMS = "albums";
export const ARTISTS = "artists";
export const PLAYLISTS = "playlists";
export const SONGS = "songs";
export const SEARCH = "search";

//Axios return
export const HTTP = {
  method: {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
    DELETE: "DELETE"
  },
  response: {
    OK: 200,
    UNAUTHORIZED: 401
  }
};

export const VIEW_TYPE = {
  DASHBOARD: "Home",
  PLAYLIST: "Playlists",
  ALBUMS: "Albums",
  ARTISTS: "Artists",
  PODCASTS: "Podcasts",
  TRACKS: "Tracks",
  SEARCH: "Search",
  PROFILE: "Profile",
  LANGUAGES: "Languages"
};

// General
export const SET_TOKEN = "SET_TOKEN";
export const UPDATE_VIEW_TYPE = "UPDATE_VIEW_TYPE";

// User
export const SET_USER = "SET_USER";
export const LOG_OUT = "LOG_OUT";
// Albums

// Artists
export const FETCH_ARTISTS_PENDING = "FETCH_ARTISTS_PENDING";
export const FETCH_ARTISTS_SUCCESS = "FETCH_ARTISTS_SUCCESS";
export const FETCH_ARTISTS_ERROR = "FETCH_ARTISTS_ERROR";
export const SET_ARTIST_IDS = "SET_ARTIST_IDS";

// Library
export const FETCH_SONGS_PENDING = "FETCH_SONGS_PENDING";
export const FETCH_SONGS_SUCCESS = "FETCH_SONGS_SUCCESS";
export const FETCH_SONGS_ERROR = "FETCH_SONGS_ERROR";

// Playlists
export const FETCH_PLAYLIST_ITEMS_PENDING = "FETCH_PLAYLIST_ITEMS_PENDING";
export const FETCH_PLAYLIST_ITEMS_SUCCESS = "FETCH_PLAYLIST_ITEMS_SUCCESS";
export const FETCH_SELECTED_PLAYLIST = "FETCH_SELECTED_PLAYLIST";
export const FETCH_PLAYLIST_ITEMS_ERROR = "FETCH_PLAYLIST_ITEMS_ERROR";
export const ADD_PLAYLIST_ITEM = "ADD_PLAYLIST_ITEM";
export const FETCH_PLAYLIST_SONGS_PENDING = "FETCH_PLAYLIST_SONGS_PENDING";
export const FETCH_PLAYLIST_SONGS_SUCCESS = "FETCH_PLAYLIST_SONGS_SUCCESS";
export const FETCH_PLAYLIST_SONGS_ERROR = "FETCH_PLAYLIST_SONGS_ERROR";

// Songs
export const PLAY_SONG = "PLAY_SONG";
export const STOP_SONG = "STOP_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
export const RESUME_SONG = "RESUME_SONG";
