import parseElementFromString from "common/utils/parseElementFromString";
import { template } from "./constants";
import {
  getCancelEditEventHandler,
  getFormSubmitEventHandler,
  imageEditEventHandler,
} from "./utils";

const PostEditor = (post, setState) => {
  const $Form = parseElementFromString(template(post));

  const $ImageEditBtn = $Form.querySelector("#post__image__edit");
  $ImageEditBtn.addEventListener("click", imageEditEventHandler);

  const cancelEventHandler = getCancelEditEventHandler(setState);
  const $CancelBtn = $Form.querySelector("#post__actions__cancel");
  $CancelBtn.addEventListener("click", cancelEventHandler);

  const formSubmitEventHandler = getFormSubmitEventHandler(post, setState);
  $Form.addEventListener("submit", formSubmitEventHandler);

  return $Form;
};

export default PostEditor;
