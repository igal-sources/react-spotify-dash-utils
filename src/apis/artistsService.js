import * as service from "./spotifyService";

export const fetchArtist = (accessToken, id, callback) => {
  service.fetchData(service.buildUrl(`/artists/${id}`), accessToken, response =>
    callback(response)
  );
};

export const fetchArtistsAlbums = (accessToken, id, callback) => {
  service.fetchData(service.buildUrl(`/artists/${id}/albums`), accessToken, response => callback(response));
};

export const fetchArtistsRelatedArtists = (accessToken, id, callback) => {
  service.fetchData(service.buildUrl(`/artists/${id}/related-artists`), accessToken, response =>
    callback(response)
  );
};

export const fetchArtistsTopTracks = (accessToken, id, callback) => {
  service.fetchData(service.buildUrl(`/artists/${id}/top-tracks`), accessToken, response => callback(response));
};

export const fetchArtistsByIds = (accessToken, ids, callback) => {
  service.fetchData(service.buildUrl(`/artists?ids${ids}`), accessToken, response => callback(response));
};
