import { fetchData, buildUrl } from "./spotifyService";

export const GetUsersTopArtistsAndTracks = (token, type, callback) => {
  fetchData(buildUrl(`/me/top/${type}?limit=50`), token, response => callback(response));
};
