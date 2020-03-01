import * as service from "./spotifyService";

export const fetchAlbumsTracks = (accessToken, id, callback) => {
  service.fetchData(service.buildUrl(`/albums/${id}/tracks`), accessToken, response =>
    callback(response)
  );
};

export const fetchAlbum = (accessToken, id, callback) => {
  service.fetchData(service.buildUrl(`/albums/${id}`), accessToken, response =>
    callback(response)
  );
};

export const fetchAlbums = (accessToken, ids, callback) => {
  service.fetchData(service.buildUrl(`/albums/${ids}`), accessToken, response =>
    callback(response)
  );
};