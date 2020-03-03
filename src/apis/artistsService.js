import { fetchData, buildUrl } from "./spotifyService";

export const fetchArtist = (accessToken, id, callback) => {
  fetchData(buildUrl(`/artists/${id}`), accessToken, response => callback(response));
};

export const fetchArtistsAlbums = (accessToken, id, callback) => {
  fetchData(buildUrl(`/artists/${id}/albums`), accessToken, response => callback(response));
};

export const fetchArtistsRelatedArtists = (accessToken, id, callback) => {
  fetchData(buildUrl(`/artists/${id}/related-artists`), accessToken, response =>
    callback(response)
  );
};

export const fetchArtistsTopTracks = (accessToken, id, callback) => {
  fetchData(buildUrl(`/artists/${id}/top-tracks`), accessToken, response => callback(response));
};

export const fetchArtistsByIds = (accessToken, ids, callback) => {
  fetchData(buildUrl(`/artists?ids${ids}`), accessToken, response => callback(response));
};
