import * as service from "./spotifyService";

export const AddTracksToPlaylist = (accessToken, playlistId, uris, callback) => {
  service.fetchData(
    service.buildUrl(`/playlists/${playlistId}/tracks?uris=${uris}`),
    accessToken,
    response => callback(response)
  );
};

export const ChangePlaylistsDetails = (accessToken, playlistId, uris, callback) => {
  service.fetchData(service.buildUrl(`/playlists/{playlist_id}`), accessToken, response =>
    callback(response)
  );
};

export const CreatePlaylist = (accessToken, userId, playlistData, callback) => {
  service.fetchData(
    service.buildUrl(`/users/${userId}/playlists --data ${playlistData}`),
    accessToken,
    response => callback(response)
  );
};

export const GetListOfCurrentUsersPlaylists = (accessToken, callback) => {
  service.fetchData(service.buildUrl(`/me/playlists`), accessToken, response => callback(response));
};

export const GetPlaylist = (accessToken, callback) => {
  service.fetchData(service.buildUrl(`/playlists/{playlist_id}`), accessToken, response =>
    callback(response)
  );
};

export const GetPlaylistCoverImage = (accessToken, playlistId, callback) => {
  service.fetchData(service.buildUrl(`/playlists/${playlistId}/images`), accessToken, response =>
    callback(response)
  );
};

export const GetPlaylistsTracks = (accessToken, playlistId, callback) => {
  service.fetchData(service.buildUrl(`/playlists/${playlistId}/tracks`), accessToken, response =>
    callback(response)
  );
};

export const RemoveTracksFromPlaylist = (accessToken, playlistId, callback) => {
  service.fetchData(service.buildUrl(`/playlists/${playlistId}/tracks`), accessToken, response =>
    callback(response)
  );
};

export const ReorderPlaylistsTracks = (accessToken, playlistId, data, callback) => {
  service.fetchData(
    service.buildUrl(`/playlists/${playlistId}/tracks --data ${data}`),
    accessToken,
    response => callback(response)
  );
};

export const ReplacePlaylistTracks = (accessToken, playlistId, data, callback) => {
  service.fetchData(
    service.buildUrl(`/playlists/${playlistId}/tracks --data ${data}`),
    accessToken,
    response => callback(response)
  );
};

export const UploadCustomPlaylistCoverImage = (accessToken, playlistId, data, callback) => {
  service.fetchData(
    service.buildUrl(`/playlists/${playlistId}/images --data ${data}`),
    accessToken,
    response => callback(response)
  );
};
