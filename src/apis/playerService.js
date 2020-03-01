import * as service from "./spotifyService";

export const AddItemUsersPlaybackQueue = (accessToken, uri, callback) => {
  service.fetchData(service.buildUrl(`/me/player/add-to-queue?uri=${uri}`), accessToken, response =>
    callback(response)
  );
};

export const GetUsersAvailableDevices = (accessToken, callback) => {
  service.fetchData(service.buildUrl(`/me/player/devices`), accessToken, response =>
    callback(response)
  );
};

export const GetInfoAboutUsersCurrentPlayback = (accessToken, callback) => {
  service.fetchData(service.buildUrl(`/me/player`), accessToken, response => callback(response));
};

export const GetCurrentUsersRecentlyPlayedTracks = (accessToken, callback) => {
  service.fetchData(service.buildUrl(`/me/player/recently-played`), accessToken, response =>
    callback(response)
  );
};

export const GetUsersCurrentlyPlayingTrack = (accessToken, callback) => {
  service.fetchData(service.buildUrl(`/me/player/currently-playing`), accessToken, response =>
    callback(response)
  );
};

export const PauseUsersPlayback = (accessToken, callback) => {
  service.fetchData(service.buildUrl(`/me/player/pause`), accessToken, response =>
    callback(response)
  );
};

export const SeekToPositionInCurrentlyPlayingTrack = (accessToken, position, callback) => {
  service.fetchData(
    service.buildUrl(`/me/player/seek?position_ms=${position}`),
    accessToken,
    response => callback(response)
  );
};

export const SetRepeatModeOnUsersPlayback = (accessToken, callback) => {
  service.fetchData(service.buildUrl(`/me/player/repeat?state=context`), accessToken, response =>
    callback(response)
  );
};

export const SetVolumeForUsersPlayback = (accessToken, volumePercent, callback) => {
  service.fetchData(
    service.buildUrl(`/me/player/volume?volume_percent=${volumePercent}`),
    accessToken,
    response => callback(response)
  );
};

export const SkipUsersPlaybackToNextTrack = (accessToken, callback) => {
  service.fetchData(service.buildUrl(`/me/player/next`), accessToken, response =>
    callback(response)
  );
};

export const SkipUsersPlaybackToPreviousTrack = (accessToken, callback) => {
  service.fetchData(service.buildUrl(`/me/player/previous`), accessToken, response =>
    callback(response)
  );
};

export const StartResumeUsersPlayback = (accessToken, callback) => {
  service.fetchData(service.buildUrl(`/me/player/play`), accessToken, response =>
    callback(response)
  );
};

export const ToggleShuffleForUsersPlayback = (accessToken, callback) => {
  service.fetchData(service.buildUrl(`/me/player/shuffle?state=true`), accessToken, response =>
    callback(response)
  );
};

export const TransferUsersPlayback = (accessToken, deviceIds, callback) => {
  service.fetchData(
    service.buildUrl(`/me/player {device_ids: ${deviceIds}}`),
    accessToken,
    response => callback(response)
  );
};
