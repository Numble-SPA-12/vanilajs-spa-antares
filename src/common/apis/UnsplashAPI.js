import axios from "axios";

export const getRandomPhoto = async () => {
  const response = await axios.get("https://api.unsplash.com/photos/random", {
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
  });
  return response.data;
};
