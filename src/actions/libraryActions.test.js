import allActions from "actions";
import * as types from "../shared/types";
import songs from "../../mock/songs-library/songs.json";

describe("Test library actions", () => {
  it("should test fetch songs pending", () => {
    const result = {
      type: types.FETCH_SONGS_PENDING
    };

    expect(allActions.libraryActions.fetchSongsPending()).toEqual(result);
  });

  it("should test fetch songs success", () => {
    const result = {
      type: types.FETCH_SONGS_SUCCESS,
      songs
    };

    expect(allActions.libraryActions.fetchSongsSuccess(songs)).toEqual(result);
  });

  it("should test fetch songs error", () => {
    const result = {
      type: types.FETCH_SONGS_ERROR
    };

    expect(allActions.libraryActions.fetchSongsError()).toEqual(result);
  });
});
