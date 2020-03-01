import * as service from "./spotifyService";

export const GetAudioAnalysisForTrack = (accessToken, id, callback) => {
  service.fetchData(service.buildUrl(`/audio-analysis/${id}`), accessToken, response =>
    callback(response)
  );
};

export const GetAudioFeaturesForTrack = (accessToken, id, callback) => {
  service.fetchData(service.buildUrl(`/audio-features/${id}`), accessToken, response =>
    callback(response)
  );
};

export const GetAudioFeaturesForSeveralTracks = (accessToken, ids, callback) => {
  service.fetchData(service.buildUrl(`/audio-features?ids=${ids}`), accessToken, response =>
    callback(response)
  );
};

export const GetSeveralTracks = (accessToken, ids, callback) => {
  service.fetchData(service.buildUrl(`/tracks?ids=${ids}`), accessToken, response =>
    callback(response)
  );
};

export const GetTrack = (accessToken, id, callback) => {
  service.fetchData(service.buildUrl(`/tracks/${id}`), accessToken, response =>
    callback(response)
  );
};