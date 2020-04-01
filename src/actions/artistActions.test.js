import allActions from "actions";
import * as types from "../shared/types";
import artist from "../../mock/artists/artist.json";

describe("Test artist actions", () => {
  it("should test fetch artists pending", () => {
    const result = {
      type: types.FETCH_ARTISTS_PENDING
    };

    expect(allActions.artistActions.fetchArtistsPending()).toEqual(result);
  });

  it("should test fetch Artists Success", () => {
    const result = {
      type: types.FETCH_ARTISTS_SUCCESS,
      artists: artist
    };

    expect(allActions.artistActions.fetchArtistsSuccess(artist)).toEqual(result);
  });

  it("should test fetch artists error", () => {
    const result = {
      type: types.FETCH_ARTISTS_ERROR
    };

    expect(allActions.artistActions.fetchArtistsError()).toEqual(result);
  });

  it("should test fetch artist ids", () => {
    const result = {
      type: types.SET_ARTIST_IDS
    };

    expect(allActions.artistActions.setArtistIds()).toEqual(result);
  });
});
