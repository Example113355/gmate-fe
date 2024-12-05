import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

const http = async (method: string, url: string, data = {}, params = {}) => {
  try {
    const response = await apiClient({
      method: method,
      url: url,
      data: data,
      params: params,
    });
    return response;
  } catch (error) {
    return error;
  }
};

const get = (url: string, params: {}) => {
  return http("get", url, {}, params);
};

const post = (url: string, data: {}) => {
  return http("post", url, data);
};

const patch = (url: string, data: {}) => {
  return http("patch", url, data);
};

const remove = (url: string) => {
  return http("delete", url);
};

export { get, post, patch, remove };
