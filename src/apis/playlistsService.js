import { fetchData, buildUrl } from "./spotifyService";
import { useUserId } from "services/hooks/use-selectors";
import { HTTP } from "shared/types";

export const AddTracksToPlaylist = (token, playlistId, uris, callback) => {
  fetchData(buildUrl(`/playlists/${playlistId}/tracks?uris=${uris}`), token, response =>
    callback(response)
  );
};

export const ChangePlaylistsDetails = (token, playlistId, uris, callback) => {
  fetchData(buildUrl(`/playlists/${playlistId}`), token, response => callback(response));
};

export const CreatePlaylist = (token, playlistData, callback) => {
  const userId = useUserId();

  fetchData(
    buildUrl(`/users/${userId}/playlists`),
    token,
    response => callback(response),
    HTTP.method.POST,
    playlistData
  );
};

//https://api.spotify.com/v1/users/z7wfmfeq61fi9z75gydvspo0d/playlists?offset=0&limit=50
export const CurrentUsersPlaylists = async (token, callback) => {
  await fetchData(buildUrl(`/me/playlists?limit=50`), token, response => callback(response));
};

export const getPlaylist = async (token, playlistId, callback) => {
  await fetchData(buildUrl(`/playlists/${playlistId}`), token, response => callback(response));
};

export const GetPlaylistCoverImage = (token, playlistId, callback) => {
  fetchData(buildUrl(`/playlists/${playlistId}/images`), token, response => callback(response));
};

export const getPlaylistsTracks = async (token, playlistId, callback) => {
  await fetchData(buildUrl(`/playlists/${playlistId}/tracks`), token, response => callback(response));
};

export const RemoveTracksFromPlaylist = (token, playlistId, callback) => {
  fetchData(buildUrl(`/playlists/${playlistId}/tracks`), token, response => callback(response));
};

export const ReorderPlaylistsTracks = (token, playlistId, data, callback) => {
  fetchData(buildUrl(`/playlists/${playlistId}/tracks --data ${data}`), token, response =>
    callback(response)
  );
};

export const ReplacePlaylistTracks = (token, playlistId, data, callback) => {
  fetchData(buildUrl(`/playlists/${playlistId}/tracks --data ${data}`), token, response =>
    callback(response)
  );
};

export const UploadCustomPlaylistCoverImage = (token, playlistId, data, callback) => {
  fetchData(buildUrl(`/playlists/${playlistId}/images --data ${data}`), token, response =>
    callback(response)
  );
};
