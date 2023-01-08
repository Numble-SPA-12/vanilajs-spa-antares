import axios from "axios";

const BASE_URL = "http://43.201.103.199";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
