import * as service from "./spotifyService";

export const fetchUnfollowArtistsOrUsers = (accessToken, type, ids, callback) => {
  service.fetchData(
    service.buildUrl(`/me/following?type=${type}&ids=${ids}`),
    accessToken,
    response => callback(response)
  );
};

export const fetchUnfollowPlaylist = (accessToken, playlistId, callback) => {
  service.fetchData(service.buildUrl(`/playlists/${playlistId}/followers`), accessToken, response =>
    callback(response)
  );
};

export const fetchIfCurrentUserFollowsArtistsOrUsers = (accessToken, type, ids, callback) => {
  service.fetchData(
    service.buildUrl(`/me/following/contains?type=${type}&ids=${ids}`),
    accessToken,
    response => callback(response)
  );
};

export const fetchFollowedArtists = (accessToken, artist, callback) => {
  service.fetchData(service.buildUrl(`/me/following?type=${artist}`), accessToken, response =>
    callback(response)
  );
};

export const fetchIfUsersFollowPlaylist = (accessToken, playlistId, ids, callback) => {
  service.fetchData(
    service.buildUrl(`/playlists/${playlistId}/followers/contains?ids=${ids}`),
    accessToken,
    response => callback(response)
  );
};

export const fetchFollowArtistsOrUsers = (accessToken, type, ids, callback) => {
  service.fetchData(
    service.buildUrl(`/me/following?type=${type}&ids=${ids}`),
    accessToken,
    response => callback(response)
  );
};

export const fetchFollowPlaylist = (accessToken, playlistId, callback) => {
  service.fetchData(
    service.buildUrl(`/playlists/${playlistId}/followers`),
    accessToken,
    response => callback(response)
  );
};
