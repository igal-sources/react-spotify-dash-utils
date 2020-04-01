import allActions from "actions";
import * as types from "../shared/types";
import playlist from "../../mock/playlists/playlist.json";
import songs from "../../mock/songs-library/songs.json";

describe("Test playlist actions", () => {
  it("should test fetch playlist items pending", () => {
    const result = {
      type: types.FETCH_PLAYLIST_ITEMS_PENDING
    };

    expect(allActions.playlistActions.fetchPlaylistItemsPending()).toEqual(result);
  });

  it("should test fetch playlist Success", () => {
    const result = {
      type: types.FETCH_PLAYLIST_ITEMS_SUCCESS,
      playlists: playlist
    };

    expect(allActions.playlistActions.fetchPlaylistItemsSuccess(playlist)).toEqual(result);
  });

  it("should test fetch selected playlist", () => {
    const result = {
      type: types.FETCH_SELECTED_PLAYLIST,
      playlist: playlist[0]
    };

    expect(allActions.playlistActions.fetchSelectedPlaylist(playlist[0])).toEqual(result);
  });

  it("should test fetch playlist items error", () => {
    const result = {
      type: types.FETCH_PLAYLIST_ITEMS_ERROR
    };

    expect(allActions.playlistActions.fetchPlaylistItemsError(playlist[0])).toEqual(result);
  });

  it("should test add playlist item", () => {
    const result = {
      type: types.ADD_PLAYLIST_ITEM,
      playlist: playlist[1]
    };

    expect(allActions.playlistActions.addPlaylistItem(playlist[1])).toEqual(result);
  });

  it("should test add playlist item", () => {
    const result = {
      type: types.FETCH_PLAYLIST_SONGS_PENDING
    };

    expect(allActions.playlistActions.fetchPlaylistSongsPending()).toEqual(result);
  });

  it("should test fetch playlist songs success", () => {
    const result = {
      type: types.FETCH_PLAYLIST_SONGS_SUCCESS,
      songs
    };

    expect(allActions.playlistActions.fetchPlaylistSongsSuccess(songs)).toEqual(result);
  });

  it("should test fetch playlist songs error", () => {
    const result = {
      type: types.FETCH_PLAYLIST_SONGS_ERROR
    };

    expect(allActions.playlistActions.fetchPlaylistSongsError()).toEqual(result);
  });
});
