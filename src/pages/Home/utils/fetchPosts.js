import * as PostsAPI from "common/apis/PostsAPI";

const fetchPosts = async (setState) => {
  setState({
    isLoading: true,
  });
  const result = await PostsAPI.getPosts();
  if (result.code === 200) {
    setState({
      posts: result.data.posts,
      isLoading: false,
    });
  } else {
    setState({
      isLoading: false,
    });
  }
};

export default fetchPosts;
