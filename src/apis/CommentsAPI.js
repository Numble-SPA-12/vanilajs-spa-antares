import { axiosInstance } from "./axiosInstance.js";

export const createComment = async (postId, comment) => {
  const { data } = await axiosInstance.post(`/comment/${postId}`, {
    content: comment,
  });
  return data;
};

export const deleteComment = async (id) => {
  const { data } = await axiosInstance.delete(`/comment/${id}`);
  return data;
};
