import { createComment } from "common/apis/CommentsAPI";
import router from "common/router";
import parseElementFromString from "common/utils/parseElementFromString";
import fetchPostAndComment from "../utils/fetchPostAndComment";

const getFormSubmitHandler = (setState) => async (e) => {
  e.preventDefault();
  const $textarea = e.target.querySelector("textarea");
  const comment = $textarea.value.trim();
  if (!comment) return;

  const { postId } = router.params();
  try {
    const responseData = await createComment(postId, comment);
    if (responseData.code === 201) {
      $textarea.value = "";
      fetchPostAndComment(setState);
    }
  } catch (err) {
    if (err.response.status === 400) {
      alert(err.response.data.message);
    }
  }
};

const CommentUploader = (setState) => {
  const componentString = `
    <form id="post__comments__form" class="">
      <textarea name="comment" placeholder="Write a comment..."  cols="30" rows="3" class="w-full resize-none text-sm border border-gray-300 rounded-md p-2"></textarea>
      <button type="submit" class="w-20 mt-2 bg-black text-white rounded-md py-2">Submit</button>
    </form>
  `;

  const $commentUploader = parseElementFromString(componentString);

  const formSubmitHandler = getFormSubmitHandler(setState);

  $commentUploader.addEventListener("submit", formSubmitHandler);

  return $commentUploader;
};

export default CommentUploader;
