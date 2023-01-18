import parseElementFromString from "common/utils/parseElementFromString";

const commentListSkeletonTemlate = `
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

const CommentListSkeleton = () => {
  return parseElementFromString(commentListSkeletonTemlate);
};

export default CommentListSkeleton;
