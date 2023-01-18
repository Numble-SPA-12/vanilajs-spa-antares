import { createComment } from "common/apis/CommentsAPI";
import router from "common/router";

export const getFormSubmitEventHandler = (setState) => async (e) => {
  e.preventDefault();
  const $textarea = e.target.querySelector("textarea");
  const comment = $textarea.value.trim();
  if (!comment) return;

  const { postId } = router.params();
  try {
    const responseData = await createComment(postId, comment);
    if (responseData.code === 201) {
      $textarea.value = "";
      setState((prevState) => ({
        ...prevState,
        comments: [...prevState.comments, responseData.data],
      }));
    }
  } catch (err) {
    if (err.response.status === 400) {
      alert(err.response.data.message);
    }
  }
};
