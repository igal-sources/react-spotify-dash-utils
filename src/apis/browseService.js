import * as service from "./spotifyService";

export const fetchAvailableGenreSeeds = (accessToken, callback) => {
  service.fetchData(
    service.buildUrl(`/recommendations/available-genre-seeds`),
    accessToken,
    response => callback(response)
  );
};

export const fetchListOfBrowseCategories = (accessToken, callback) => {
  service.fetchData(service.buildUrl(`/browse/categories`), accessToken, response =>
    callback(response)
  );
};

export const fetchSingleBrowseCategories = (accessToken, categoryId, callback) => {
  service.fetchData(service.buildUrl(`/browse/categories/${categoryId}`), accessToken, response =>
    callback(response)
  );
};

export const fetchCategoriesPlaylists = (accessToken, categoryId, callback) => {
  service.fetchData(
    service.buildUrl(`/browse/categories/${categoryId}/playlists`),
    accessToken,
    response => callback(response)
  );
};

export const fetchListOfFeaturedPlaylists = (accessToken, callback) => {
  service.fetchData(service.buildUrl(`/browse/featured-playlists`), accessToken, response =>
    callback(response)
  );
};

export const fetchListOfNewReleases = (accessToken, callback) => {
  service.fetchData(service.buildUrl(`/browse/new-releases`), accessToken, response =>
    callback(response)
  );
};

export const fetchRecommendationsBasedOnSeeds = (accessToken, callback) => {
  service.fetchData(service.buildUrl(`/recommendations`), accessToken, response =>
    callback(response)
  );
};
