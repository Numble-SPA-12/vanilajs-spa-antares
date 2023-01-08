import { axiosInstance } from "./axiosInstance.js";

export const getPosts = async () => {
  const { data } = await axiosInstance.get("/posts");
  return data;
};

export const getPostById = async (id) => {
  const { data } = await axiosInstance.get(`/post/${id}`);
  return data;
};

export const createPost = async (post) => {
  const { data } = await axiosInstance.post("/post", post);
  return data;
};

export const updatePost = async (id, post) => {
  const { data } = await axiosInstance.put(`/post/${id}`, post);
  return data;
};

export const deletePost = async (id) => {
  const { data } = await axiosInstance.delete(`/post/${id}`);
  return data;
};
