import * as service from "./spotifyService";

export const RemoveAlbumsForCurrentUser = (accessToken, ids, callback) => {
  service.fetchData(service.buildUrl(`/me/albums?ids=${ids}`), accessToken, response =>
    callback(response)
  );
};

export const RemoveUsersSavedTracks = (accessToken, callback) => {
  service.fetchData(service.buildUrl(`/me/track`), accessToken, response => callback(response));
};

export const CheckUsersSavedAlbums = (accessToken, ids, callback) => {
  service.fetchData(service.buildUrl(`/me/albums/contains?ids=${ids}`), accessToken, response =>
    callback(response)
  );
};

export const CheckUsersSavedTracks = (accessToken, ids, callback) => {
  service.fetchData(service.buildUrl(`/me/tracks/contains?ids=${ids}`), accessToken, response =>
    callback(response)
  );
};

export const GetCurrentUsersSavedAlbums = (accessToken, callback) => {
  service.fetchData(service.buildUrl(`/me/albums`), accessToken, response => callback(response));
};

export const GetCurrentUsersSavedtracks = (accessToken, callback) => {
  service.fetchData(service.buildUrl(`/me/tracks`), accessToken, response => callback(response));
};

export const SaveAlbumsForCurrentUser = (accessToken, ids, callback) => {
  service.fetchData(service.buildUrl(`/me/albums?ids=${ids}`), accessToken, response =>
    callback(response)
  );
};

export const SaveTracksForUser = (accessToken, ids, callback) => {
  service.fetchData(service.buildUrl(`/me/tracks {ids: ${ids}}`), accessToken, response =>
    callback(response)
  );
};
