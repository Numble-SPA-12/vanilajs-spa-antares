import router from "common/router";
import { deleteComment, createComment } from "common/apis/CommentsAPI";
import fetchPostAndComment from "./fetchPostAndComment";

export const headerClickHandler = (e) => {
  const $target = e.target.closest("button");
  if ($target && $target.id === "back-button") {
    router.back();
  }
};

export const commentDeleteHandler = async (e) => {
  const $target = e.target.closest("button");
  if ($target && $target.dataset.commentId) {
    try {
      const { code } = await deleteComment($target.dataset.commentId);
      if (code === 200) {
        fetchPostAndComment();
      }
    } catch (err) {
      console.error(err);
      if (err.response.status === 400) {
        alert(err.response.data.message);
      }
    }
  }
};

export const formSubmitHandler = async (e) => {
  e.preventDefault();
  const $textarea = $form.querySelector("textarea");
  const comment = $textarea.value.trim();
  if (!comment) return;

  const { postId } = router.params();

  try {
    const responseData = await createComment(postId, comment);
    if (responseData.code === 201) {
      $textarea.value = "";
      fetchPostAndComment(postId);
    }
  } catch (err) {
    if (err.response.status === 400) {
      alert(err.response.data.message);
    }
  }
};
