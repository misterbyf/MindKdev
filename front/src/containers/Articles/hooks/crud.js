import apiClient from "axios";
require('dotenv').config();
const url = process.env.REACT_APP_API_URL;

export const getPosts = async ({posts, limit, page}) => {
    return apiClient.get(`${url}/${posts}?_limit=${limit}&page=${page}`);
};

export const addPost = async (post) => {
  return apiClient.post(`${url}/posts`, post);
};

