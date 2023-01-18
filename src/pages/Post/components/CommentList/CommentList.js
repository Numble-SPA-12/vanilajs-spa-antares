import parseElementFromString from "common/utils/parseElementFromString";
import Comment from "../Comment";
import NoCommentPlaceholder from "./NoCommentPlaceholder";
import CommentListSkeleton from "./CommentListSkeleton";
import { getCommentDeleteHandler } from "./utils";

const commentListTemplate = `<ul id="post__comments__list" class="flex flex-col gap-2"></ul>`;

const CommentList = (comments, setState) => {
  const $framgent = document.createDocumentFragment();
  if (comments.length === 0) {
    $framgent.appendChild(NoCommentPlaceholder());
  } else {
    comments.forEach((comment) => {
      const $comment = Comment(comment);
      $framgent.appendChild($comment);
    });
  }

  const $commentList = parseElementFromString(commentListTemplate);
  $commentList.appendChild($framgent);
  $commentList.addEventListener("click", getCommentDeleteHandler(setState));

  return $commentList;
};

CommentList.Loading = CommentListSkeleton;

export default CommentList;
