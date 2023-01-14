import axios from "axios";

const BASE_URL = process.env.BASE_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
