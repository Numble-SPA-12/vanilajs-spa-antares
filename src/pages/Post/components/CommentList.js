import parseElementFromString from "common/utils/parseElementFromString";
import Comment from "./Comment";

const CommentList = (comments) => {
  const componentString = `
    <ul id="post__comments__list" class="flex flex-col gap-2">
      ${comments.map(Comment).join("")}
      ${
        comments.length === 0
          ? `<p class="text-center text-gray-500 my-6">No comments yet</p>`
          : ""
      }
    </ul>
  `;

  return parseElementFromString(componentString);
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
