import parseElementFromString from "common/utils/parseElementFromString";
import { getFormSubmitEventHandler } from "./utils";

const template = `
    <form id="post__comments__form" class="">
      <textarea name="comment" placeholder="Write a comment..."  cols="30" rows="3" class="w-full resize-none text-sm border border-gray-300 rounded-md p-2"></textarea>
      <button type="submit" class="w-20 mt-2 bg-black text-white rounded-md py-2">Submit</button>
    </form>
  `;

const CommentUploader = (setState) => {
  const $commentUploader = parseElementFromString(template);
  const formSubmitHandler = getFormSubmitEventHandler(setState);
  $commentUploader.addEventListener("submit", formSubmitHandler);

  return $commentUploader;
};

export default CommentUploader;
