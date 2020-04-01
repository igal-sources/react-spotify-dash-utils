import * as types from "../shared/types";

export const playSong = song => {
  return {
    type: types.PLAY_SONG,
    song
  };
};

export const stopSong = () => {
  return {
    type: types.STOP_SONG
  };
};

export const pauseSong = () => {
  return {
    type: types.PAUSE_SONG
  };
};

export const resumeSong = () => {
  return {
    type: types.RESUME_SONG
  };
};

export default { playSong, stopSong, pauseSong, resumeSong };
