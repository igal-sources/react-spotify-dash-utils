import axios from "axios";
import config from "../config";
import { HTTP } from "shared/types";

export const fetchUser = (accessToken, callback) => {
  fetchData(buildUrl("/me"), accessToken, response => callback(response));
};

export const search = (accessToken, query, type, callback) => {
  fetchData(buildUrl(`/search?q=${query}&type=${type}`), accessToken, response =>
    callback(response)
  );
};

export const GetUsersProfile = (accessToken, userId, callback) => {
  fetchData(buildUrl(`/users/${userId}`), accessToken, response => callback(response));
};

export const buildUrl = query => `${config.BASE_URL}${query}`;

export const fetchData = async (url, token,  callback, method = HTTP.method.GET, requestBody = {}) => {
  try {
    const response = await axios({
      method,
      url,
      data: requestBody,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response) {
      throw new Error("Something went wrong");
    }

    const json = await response.data;
    callback(json);
  } catch (error) {
    console.log("error: ", error);
  }
};
