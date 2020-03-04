export const fetchArtistsPending = () => {
  return {
    type: "FETCH_ARTISTS_PENDING"
  };
};

export const fetchArtistsSuccess = artists => {
  return {
    type: "FETCH_ARTISTS_SUCCESS",
    artists
  };
};

export const fetchArtistsError = () => {
  return {
    type: "FETCH_ARTISTS_ERROR"
  };
};

export const setArtistIds = artistIds => {
  return {
    type: "SET_ARTIST_IDS",
    artistIds
  };
};

export default { fetchArtistsPending, fetchArtistsSuccess, setArtistIds };
