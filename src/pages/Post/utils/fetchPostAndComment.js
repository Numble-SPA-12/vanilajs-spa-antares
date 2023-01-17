import { getPostById } from "common/apis/PostsAPI";
import router from "common/router";

const fetchPostAndComment = async (setState) => {
  const { postId } = router.params();

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
