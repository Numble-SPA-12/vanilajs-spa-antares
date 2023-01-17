import { deleteComment } from "common/apis/CommentsAPI";
import parseElementFromString from "common/utils/parseElementFromString";
import Comment from "./Comment";

const CommentList = (comments, setState) => {
  const $framgent = document.createDocumentFragment();

  if (comments.length === 0) {
    const $noComment = document.createElement("p");
    $noComment.classList.add("text-center", "text-gray-500", "my-6");
    $noComment.textContent = "No comments yet";
    $framgent.appendChild($noComment);
  } else {
    comments.forEach((comment) => {
      const $comment = Comment(comment);
      $framgent.appendChild($comment);
    });
  }

  const listTemplate = `
    <ul id="post__comments__list" class="flex flex-col gap-2"></ul>
  `;
  const $commentList = parseElementFromString(listTemplate);
  $commentList.appendChild($framgent);

  $commentList.addEventListener("click", async (e) => {
    const $target = e.target.closest("button");

    if ($target && $target.dataset.commentId) {
      try {
        const { code } = await deleteComment($target.dataset.commentId);
        if (code === 200) {
          setState((prevState) => ({
            ...prevState,
            comments: prevState.comments.filter(
              (comment) => comment.commentId !== $target.dataset.commentId
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
  });

  return $commentList;
};

const CommentListSkeleton = () => {
  const componentString = `
    <ul id="post__comments__list" class="flex flex-col gap-2">
      <li class="flex flex-col gap-2 pl-4 pt-2 pb-4 border-b border-gray-200 last:border-none">
        <div class="w-1/6 h-5 bg-gray-200 rounded-sm animate-pulse"></div>
        <div class="w-full h-8 bg-gray-200 rounded-sm animate-pulse"></div>
      </li>
      <li class="flex flex-col gap-2 pl-4 pt-2 pb-4 border-b border-gray-200 last:border-none">
        <div class="w-1/6 h-5 bg-gray-200 rounded-sm animate-pulse"></div>
        <div class="w-full h-8 bg-gray-200 rounded-sm animate-pulse"></div>
      </li>
    </ul>
  `;
  return parseElementFromString(componentString);
};

CommentList.Loading = CommentListSkeleton;

export default CommentList;
