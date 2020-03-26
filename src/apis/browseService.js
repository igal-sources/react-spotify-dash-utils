import { fetchData, buildUrl } from "./spotifyService";

export const fetchAvailableGenreSeeds = (token, callback) => {
  fetchData(buildUrl(`/recommendations/available-genre-seeds`), token, response =>
    callback(response)
  );
};

export const fetchListOfBrowseCategories = (token, callback) => {
  fetchData(buildUrl(`/browse/categories`), token, response => callback(response));
};

export const fetchSingleBrowseCategories = (token, categoryId, callback) => {
  fetchData(buildUrl(`/browse/categories/${categoryId}`), token, response => callback(response));
};

export const fetchCategoriesPlaylists = (token, categoryId, callback) => {
  fetchData(buildUrl(`/browse/categories/${categoryId}/playlists`), token, response =>
    callback(response)
  );
};

export const fetchListOfFeaturedPlaylists = (token, callback) => {
  fetchData(buildUrl(`/browse/featured-playlists`), token, response => callback(response));
};

export const fetchListOfNewReleases = (token, callback) => {
  fetchData(buildUrl(`/browse/new-releases?limit=50`), token, response => callback(response));
};

//https://api.spotify.com/v1/recommendations?seed_artists=3PhoLpVuITZKcymswpck5b&min_popularity=50
export const fetchRecommendationsBasedOnSeeds = (token, limit, artists, callback) => {
  fetchData(
    buildUrl(`/recommendations?seed_artists=${artists}&min_popularity=50&limit=${limit}`),
    token,
    response => callback(response)
  );
};
