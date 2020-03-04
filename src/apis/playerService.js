import { fetchData, buildUrl } from "./spotifyService";

export const AddItemUsersPlaybackQueue = (token, uri, callback) => {
  fetchData(buildUrl(`/me/player/add-to-queue?uri=${uri}`), token, response => callback(response));
};

export const GetUsersAvailableDevices = (token, callback) => {
  fetchData(buildUrl(`/me/player/devices`), token, response => callback(response));
};

export const GetInfoAboutUsersCurrentPlayback = (token, callback) => {
  fetchData(buildUrl(`/me/player`), token, response => callback(response));
};

export const GetCurrentUsersRecentlyPlayedTracks = (token, callback) => {
  fetchData(buildUrl(`/me/player/recently-played`), token, response => callback(response));
};

export const GetUsersCurrentlyPlayingTrack = (token, callback) => {
  fetchData(buildUrl(`/me/player/currently-playing`), token, response => callback(response));
};

export const PauseUsersPlayback = (token, callback) => {
  fetchData(buildUrl(`/me/player/pause`), token, response => callback(response));
};

export const SeekToPositionInCurrentlyPlayingTrack = (token, position, callback) => {
  fetchData(buildUrl(`/me/player/seek?position_ms=${position}`), token, response =>
    callback(response)
  );
};

export const SetRepeatModeOnUsersPlayback = (token, callback) => {
  fetchData(buildUrl(`/me/player/repeat?state=context`), token, response => callback(response));
};

export const SetVolumeForUsersPlayback = (token, volumePercent, callback) => {
  fetchData(buildUrl(`/me/player/volume?volume_percent=${volumePercent}`), token, response =>
    callback(response)
  );
};

export const SkipUsersPlaybackToNextTrack = (token, callback) => {
  fetchData(buildUrl(`/me/player/next`), token, response => callback(response));
};

export const SkipUsersPlaybackToPreviousTrack = (token, callback) => {
  fetchData(buildUrl(`/me/player/previous`), token, response => callback(response));
};

export const StartResumeUsersPlayback = (token, callback) => {
  fetchData(buildUrl(`/me/player/play`), token, response => callback(response));
};

export const ToggleShuffleForUsersPlayback = (token, callback) => {
  fetchData(buildUrl(`/me/player/shuffle?state=true`), token, response => callback(response));
};

export const TransferUsersPlayback = (token, deviceIds, callback) => {
  fetchData(buildUrl(`/me/player {device_ids: ${deviceIds}}`), token, response =>
    callback(response)
  );
};
