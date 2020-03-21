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
  fetchData(buildUrl(`/browse/new-releases&limit=50`), token, response => callback(response));
};

export const fetchRecommendationsBasedOnSeeds = (token, callback) => {
  fetchData(buildUrl(`/recommendations`), token, response => callback(response));
};
