import parseElementFromString from "common/utils/parseElementFromString";

const Comment = (data) => {
  const { commentId, content, postId, createdAt, updatedAt } = data;

  const commentTemplate = `
    <li class="flex group flex-col gap-2 pl-4 pt-2 pb-4 border-b border-gray-200 last:border-none hover:bg-gray-100">
      <div class="flex items-center justify-between pr-2">
        <span class="font-semibold">#${commentId}</span>
        <button data-comment-id="${commentId}" type="button" class="w-6 h-6"><i class="bi bi-x"></i></button>
      </div>
      <p class="whitespace-pre-line break-words">${content.escape()}</p>
    </li>
    `;

  const $comment = parseElementFromString(commentTemplate);

  return $comment;
};

export default Comment;
