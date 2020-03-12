export const playSong = song => {
  return {
    type: "PLAY_SONG",
    song
  };
};

export const stopSong = () => {
  return {
    type: "STOP_SONG"
  };
};

export const pauseSong = () => {
  return {
    type: "PAUSE_SONG"
  };
};

export const resumeSong = () => {
  return {
    type: "RESUME_SONG"
  };
};

export default { playSong, stopSong, pauseSong, resumeSong };
