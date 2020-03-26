import axios from "axios";
import {
  GetCurrentUsersRecentlyPlayedTracks,
  fetchListOfFeaturedPlaylists,
  GetUsersTopArtistsAndTracks,
  fetchListOfNewReleases,
  fetchRecommendationsBasedOnSeeds
} from "./";

export const dashboardRequests = token => {
  axios
    .all([
      GetCurrentUsersRecentlyPlayedTracks(token, response => {}),
      fetchListOfFeaturedPlaylists(token),
      GetUsersTopArtistsAndTracks(token, "artists"),
      fetchListOfNewReleases(token),
      fetchRecommendationsBasedOnSeeds(token, "3PhoLpVuITZKcymswpck5b")
    ])
    .then(
      axios.spread((playedTracks, playlists, newReleases, recommend) => {
        console.log(
          "playedTracks, playlists, newReleases, recommend: ",
          playedTracks,
          playlists,
          newReleases,
          recommend
        );
      })
    );
};
