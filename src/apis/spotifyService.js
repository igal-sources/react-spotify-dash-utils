import axios from "axios";
import config from "../config";
import { HTTP } from "shared/types";

export const fetchUser = (token, callback) => {
  fetchData(buildUrl("/me"), token, response => callback(response));
};

export const search = (token, query, type, callback) => {
  fetchData(buildUrl(`/search?q=${query}&type=${type}`), token, response => callback(response));
};

export const GetUsersProfile = (token, userId, callback) => {
  fetchData(buildUrl(`/users/${userId}`), token, response => callback(response));
};

export const buildUrl = query => `${config.BASE_URL}${query}`;

export const fetchData = async (
  url,
  token,
  callback,
  method = HTTP.method.GET,
  requestBody = {}
) => {
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
