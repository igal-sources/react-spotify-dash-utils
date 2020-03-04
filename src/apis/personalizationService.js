import { fetchData, buildUrl } from "./spotifyService";

export const GetUsersTopArtistsAndTracks = (token, type, callback) => {
  fetchData(buildUrl(`/me/top/${type}`), token, response => callback(response));
};
