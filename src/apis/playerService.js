import uniqBy from "lodash/uniqBy";
import { fetchData, buildUrl } from "./spotifyService";
import { HTTP } from "shared/types";

export const AddItemUsersPlaybackQueue = (token, uri, callback) => {
  fetchData(buildUrl(`/me/player/add-to-queue?uri=${uri}`), token, (response) =>
    callback(response)
  );
};

export const GetUsersAvailableDevices = (token, callback) => {
  fetchData(buildUrl(`/me/player/devices`), token, (response) => callback(response));
};

export const GetInfoAboutUsersCurrentPlayback = (token, callback) => {
  fetchData(buildUrl(`/me/player`), token, (response) => callback(response));
};

export const GetCurrentUsersRecentlyPlayedTracks = (token, limit, callback) => {
  fetchData(buildUrl(`/me/player/recently-played?limit=${limit}`), token, (response) => {
    const result = uniqBy(response.items, (item) => {
      return item.track.id;
    }).map((item) => {
      return item;
    });

    callback(result);
  });
};

export const GetUsersCurrentlyPlayingTrack = (token, callback) => {
  fetchData(buildUrl(`/me/player/currently-playing`), token, (response) => callback(response));
};

export const PauseUsersPlayback = (token, callback) => {
  fetchData(buildUrl(`/me/player/pause`), token, (response) => callback(response));
};

export const SeekToPositionInCurrentlyPlayingTrack = (token, position, callback) => {
  fetchData(buildUrl(`/me/player/seek?position_ms=${position}`), token, (response) =>
    callback(response)
  );
};

export const SetRepeatModeOnUsersPlayback = (token, callback) => {
  fetchData(buildUrl(`/me/player/repeat?state=context`), token, (response) => callback(response));
};

export const SetVolumeForUsersPlayback = (token, volumePercent, callback) => {
  fetchData(buildUrl(`/me/player/volume?volume_percent=${volumePercent}`), token, (response) =>
    callback(response)
  );
};

export const SkipUsersPlaybackToNextTrack = (token, callback) => {
  fetchData(buildUrl(`/me/player/next`), token, (response) => callback(response));
};

export const SkipUsersPlaybackToPreviousTrack = (token, callback) => {
  fetchData(buildUrl(`/me/player/previous`), token, (response) => callback(response));
};

export const startResumeUsersPlayback = (token, data, callback) => {
  fetchData(
    buildUrl(`/me/player/play`),
    token,
    (response) => callback(response),
    HTTP.method.PUT,
    data
  );
};

export const ToggleShuffleForUsersPlayback = (token, callback) => {
  fetchData(buildUrl(`/me/player/shuffle?state=true`), token, (response) => callback(response));
};

export const TransferUsersPlayback = (token, deviceIds, callback) => {
  fetchData(buildUrl(`/me/player {device_ids: ${deviceIds}}`), token, (response) =>
    callback(response)
  );
};
