import { fetchData, buildUrl } from "./spotifyService";

export const fetchAlbumsTracks = (token, id, callback) => {
  fetchData(buildUrl(`/albums/${id}/tracks`), token, response => callback(response));
};

export const fetchAlbum = (token, id, callback) => {
  fetchData(buildUrl(`/albums/${id}`), token, response => callback(response));
};

export const fetchAlbums = (token, ids, callback) => {
  fetchData(buildUrl(`/albums/${ids}`), token, response => callback(response));
};
