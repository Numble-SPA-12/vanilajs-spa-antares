import { deleteComment } from "common/apis/CommentsAPI";

export const getCommentDeleteHandler = (setState) => async (e) => {
  const $target = e.target.closest("button");

  if ($target && $target.dataset.commentId) {
    try {
      const { code } = await deleteComment($target.dataset.commentId);
      if (code === 200) {
        setState((prevState) => ({
          ...prevState,
          comments: prevState.comments.filter(
            (comment) =>
              comment.commentId.toString() !== $target.dataset.commentId
          ),
        }));
      }
    } catch (err) {
      console.error(err);
      if (err.response.status === 400) {
        alert(err.response.data.message);
      }
    }
  }
};
