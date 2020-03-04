import { fetchData, buildUrl } from "./spotifyService";

export const GetAudioAnalysisForTrack = (token, id, callback) => {
  fetchData(buildUrl(`/audio-analysis/${id}`), token, response => callback(response));
};

export const GetAudioFeaturesForTrack = (token, id, callback) => {
  fetchData(buildUrl(`/audio-features/${id}`), token, response => callback(response));
};

export const GetAudioFeaturesForSeveralTracks = (token, ids, callback) => {
  fetchData(buildUrl(`/audio-features?ids=${ids}`), token, response => callback(response));
};

export const GetSeveralTracks = (token, ids, callback) => {
  fetchData(buildUrl(`/tracks?ids=${ids}`), token, response => callback(response));
};

export const GetTrack = (token, id, callback) => {
  fetchData(buildUrl(`/tracks/${id}`), token, response => callback(response));
};
