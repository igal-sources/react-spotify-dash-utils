import * as types from "../shared/types";

export const fetchArtistsPending = () => {
  return {
    type: types.FETCH_ARTISTS_PENDING
  };
};

export const fetchArtistsSuccess = artists => {
  return {
    type: types.FETCH_ARTISTS_SUCCESS,
    artists
  };
};

export const fetchArtistsError = () => {
  return {
    type: types.FETCH_ARTISTS_ERROR
  };
};

export const setArtistIds = artistIds => {
  return {
    type: types.SET_ARTIST_IDS,
    artistIds
  };
};

export default {
  fetchArtistsPending,
  fetchArtistsSuccess,
  setArtistIds,
  fetchArtistsError
};
