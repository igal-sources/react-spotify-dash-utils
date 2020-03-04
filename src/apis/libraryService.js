import { useDispatch } from "react-redux";
import { fetchData, buildUrl } from "./spotifyService";
import uniqBy from "lodash/uniqBy";
import allActions from "actions";

export const RemoveAlbumsForCurrentUser = (token, ids, callback) => {
  fetchData(buildUrl(`/me/albums?ids=${ids}`), token, response => callback(response));
};

export const RemoveUsersSavedTracks = (token, callback) => {
  fetchData(buildUrl(`/me/track`), token, response => callback(response));
};

export const CheckUsersSavedAlbums = (token, ids, callback) => {
  fetchData(buildUrl(`/me/albums/contains?ids=${ids}`), token, response => callback(response));
};

export const CheckUsersSavedTracks = (token, ids, callback) => {
  fetchData(buildUrl(`/me/tracks/contains?ids=${ids}`), token, response => callback(response));
};

export const GetCurrentUsersSavedAlbums = (token, callback) => {
  fetchData(buildUrl(`/me/albums`), token, response => callback(response));
};

export const GetCurrentUsersSavedTracks = (token, callback) => {
  const dispatch = useDispatch();

  fetchData(buildUrl(`/me/tracks?limit=50`), token, response => {
    dispatch(allActions.libraryActions.fetchSongsPending());

    const artistIds = uniqBy(response.items, item => {
      return item.track.artists[0].name;
    })
      .map(item => {
        return item.track.artists[0].id;
      })
      .join(",");

    dispatch(allActions.artistActions.setArtistIds(artistIds));
    dispatch(allActions.libraryActions.fetchSongsSuccess(response.items));
    callback(response);
  });
};

export const SaveAlbumsForCurrentUser = (token, ids, callback) => {
  fetchData(buildUrl(`/me/albums?ids=${ids}`), token, response => callback(response));
};

export const SaveTracksForUser = (token, ids, callback) => {
  fetchData(buildUrl(`/me/tracks {ids: ${ids}}`), token, response => callback(response));
};
