const defaultState = {
  songPlaying: false,
  timeElapsed: 0,
  songId: 0,
  viewType: "songs",
  songPaused: true
};

export const songsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "PLAY_SONG":
      return {
        ...state,
        songPlaying: true,
        songDetails: action.song,
        songId: action.song.id,
        timeElapsed: 0,
        songPaused: false
      };

    case "STOP_SONG":
      return {
        ...state,
        songPlaying: false,
        songDetails: null,
        timeElapsed: 0,
        songPaused: true
      };

    case "PAUSE_SONG":
      return {
        ...state,
        songPaused: true
      };

    case "RESUME_SONG":
      return {
        ...state,
        songPaused: false
      };
    default:
      return state;
  }
};

export default songsReducer;
