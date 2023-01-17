import { getPostById } from "common/apis/PostsAPI";

const fetchPostAndComment = async (postId, setState) => {
  setState({
    isLoading: true,
  });

  try {
    const { data, success } = await getPostById(postId);
    if (success) {
      const { post, comments } = data;
      setState({
        post,
        comments,
        isLoading: false,
      });
    }
  } catch (err) {
    console.error(err);
    if (err.response.status === 400) {
      alert(err.response.data.message);
    }
    setState({
      isLoading: false,
    });
  }
};

export default fetchPostAndComment;
