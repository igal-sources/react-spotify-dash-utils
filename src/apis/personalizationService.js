import * as service from "./spotifyService";

export const GetUsersTopArtistsAndTracks = (accessToken, type, callback) => {
  service.fetchData(service.buildUrl(`/me/top/${type}`), accessToken, response =>
    callback(response)
  );
};