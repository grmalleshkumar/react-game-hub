import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "74f0b0acc259476d8e9da2cf88b74bd6",
  },
});

export default apiClient;
