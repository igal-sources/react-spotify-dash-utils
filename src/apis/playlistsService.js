import { fetchData, buildUrl } from "./spotifyService";
import { useUserId } from "services/hooks/use-selectors";
import { HTTP } from "shared/types";

export const AddTracksToPlaylist = (accessToken, playlistId, uris, callback) => {
  fetchData(buildUrl(`/playlists/${playlistId}/tracks?uris=${uris}`), accessToken, response =>
    callback(response)
  );
};

export const ChangePlaylistsDetails = (accessToken, playlistId, uris, callback) => {
  fetchData(buildUrl(`/playlists/{playlistId}`), accessToken, response => callback(response));
};

export const CreatePlaylist = (token, playlistData, callback) => {
  const  userId  = useUserId();

  fetchData(
    buildUrl(`/users/${userId}/playlists`),
    token,
    response => callback(response),
    HTTP.method.POST,
    playlistData
  );
};

export const GetListOfCurrentUsersPlaylists = (accessToken, callback) => {
  fetchData(buildUrl(`/me/playlists`), accessToken, response => callback(response));
};

export const GetPlaylist = (accessToken, callback) => {
  fetchData(buildUrl(`/playlists/{playlist_id}`), accessToken, response => callback(response));
};

export const GetPlaylistCoverImage = (accessToken, playlistId, callback) => {
  fetchData(buildUrl(`/playlists/${playlistId}/images`), accessToken, response =>
    callback(response)
  );
};

export const GetPlaylistsTracks = (accessToken, playlistId, callback) => {
  fetchData(buildUrl(`/playlists/${playlistId}/tracks`), accessToken, response =>
    callback(response)
  );
};

export const RemoveTracksFromPlaylist = (accessToken, playlistId, callback) => {
  fetchData(buildUrl(`/playlists/${playlistId}/tracks`), accessToken, response =>
    callback(response)
  );
};

export const ReorderPlaylistsTracks = (accessToken, playlistId, data, callback) => {
  fetchData(buildUrl(`/playlists/${playlistId}/tracks --data ${data}`), accessToken, response =>
    callback(response)
  );
};

export const ReplacePlaylistTracks = (accessToken, playlistId, data, callback) => {
  fetchData(buildUrl(`/playlists/${playlistId}/tracks --data ${data}`), accessToken, response =>
    callback(response)
  );
};

export const UploadCustomPlaylistCoverImage = (accessToken, playlistId, data, callback) => {
  fetchData(buildUrl(`/playlists/${playlistId}/images --data ${data}`), accessToken, response =>
    callback(response)
  );
};
