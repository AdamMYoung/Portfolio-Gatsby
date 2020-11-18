import axios from 'axios';

export const axiosConfig = axios.create();

/**
 * Sets the base URL of all API calls.
 * @param url Base URL of the application.
 */
export const setBaseUrl = (url: string) => {
  axiosConfig.defaults.baseURL = url;
};

/**
 * Sets the access token to be used during API calls.
 * @param token Access token to assign.
 */
export const setAccessToken = (token: string) => {
  axiosConfig.defaults.headers = { Authorization: `Bearer ${token}` };
};

//export default { yourApi };
