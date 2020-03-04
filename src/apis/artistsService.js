import { fetchData, buildUrl } from "./spotifyService";

export const fetchArtist = (token, id, callback) => {
  fetchData(buildUrl(`/artists/${id}`), token, response => callback(response));
};

export const fetchArtistsAlbums = (token, id, callback) => {
  fetchData(buildUrl(`/artists/${id}/albums`), token, response => callback(response));
};

export const fetchArtistsRelatedArtists = (token, id, callback) => {
  fetchData(buildUrl(`/artists/${id}/related-artists`), token, response => callback(response));
};

export const fetchArtistsTopTracks = (token, id, callback) => {
  fetchData(buildUrl(`/artists/${id}/top-tracks`), token, response => callback(response));
};

export const fetchArtistsByIds = (token, ids, callback) => {
  fetchData(buildUrl(`/artists?ids${ids}`), token, response => callback(response));
};
