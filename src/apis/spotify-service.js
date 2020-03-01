import axios from "axios";
import config from "../config";

export const fetchUser = (accessToken, callback) => {
  const endpoint = buildUrl("/me");
  console.log("endpoint: ", endpoint);
  fetchData(endpoint, accessToken, response => callback(response));
};

const buildUrl = query => `${config.BASE_URL}${query}`;

const fetchData = async (url, accessToken, callback) => {
  try {
    const response = await axios(`${url}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
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
