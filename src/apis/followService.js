import { fetchData, buildUrl } from "./spotifyService";
import { HTTP } from "../shared/types";

export const unfollowArtistsOrUsers = (token, type, ids, callback) => {
  fetchData(
    buildUrl(`/me/following?type=${type}&ids=${ids}`),
    token,
    response => callback(response),
    HTTP.method.DELETE
  );
};

export const fetchUnfollowPlaylist = (token, playlistId, callback) => {
  fetchData(buildUrl(`/playlists/${playlistId}/followers`), token, response => callback(response));
};

export const fetchIfCurrentUserFollowsArtistsOrUsers = (token, type, ids, callback) => {
  fetchData(buildUrl(`/me/following/contains?type=${type}&ids=${ids}`), token, response =>
    callback(response)
  );
};

export const fetchFollowedArtists = (token, type = "artist", callback) => {
  //const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  fetchData(buildUrl(`/me/following?type=${type}&limit=50`), token, response => callback(response));
};

export const fetchIfUsersFollowPlaylist = (token, playlistId, ids, callback) => {
  fetchData(buildUrl(`/playlists/${playlistId}/followers/contains?ids=${ids}`), token, response =>
    callback(response)
  );
};

export const fetchFollowArtistsOrUsers = (token, type, ids, callback) => {
  fetchData(buildUrl(`/me/following?type=${type}&ids=${ids}`), token, response =>
    callback(response)
  );
};

export const fetchFollowPlaylist = (token, playlistId, callback) => {
  fetchData(buildUrl(`/playlists/${playlistId}/followers`), token, response => callback(response));
};
