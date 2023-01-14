const Comment = ({ commentId, content, postId, createdAt, updatedAt }) => {
  return `
    <li  class="flex group flex-col gap-2 pl-4 pt-2 pb-4 border-b border-gray-200 last:border-none hover:bg-gray-100">
      <div class="flex items-center justify-between pr-2">
        <span class="font-semibold">#${commentId}</span>
        <button data-comment-id="${commentId}" type="button" class="opacity-0 group-hover:opacity-100"><i class="bi bi-x"></i></button>
      </div>
      <p class="whitespace-pre-line break-words">${content.escape()}</p>
    </li>
    `;
};

export default Comment;
