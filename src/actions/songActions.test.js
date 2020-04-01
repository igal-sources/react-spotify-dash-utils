import allActions from "actions";
import * as types from "../shared/types";
import songs from "../../mock/songs-library/songs.json";

describe("Test song actions", () => {
  it("should test play song", () => {
    const result = {
      type: types.PLAY_SONG,
      song: songs[0]
    };

    expect(allActions.songActions.playSong(songs[0])).toEqual(result);
  });

  it("should test stop song", () => {
    const result = {
      type: types.STOP_SONG
    };

    expect(allActions.songActions.stopSong()).toEqual(result);
  });

  it("should test pause song", () => {
    const result = {
      type: types.PAUSE_SONG
    };

    expect(allActions.songActions.pauseSong()).toEqual(result);
  });

  it("should test resume song", () => {
    const result = {
      type: types.RESUME_SONG
    };

    expect(allActions.songActions.resumeSong()).toEqual(result);
  });
});
