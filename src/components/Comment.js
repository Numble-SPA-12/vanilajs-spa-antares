const Comment = ({ commentId, content, postId, createdAt, updatedAt }) => {
  return `
    <li class="flex flex-col gap-2 pl-4 pt-2 pb-4 border-b border-gray-200 last:border-none">
      <div class="flex items-center gap-2">
        <span class="font-semibold">#${commentId}</span>
      </div>
      <p class="whitespace-pre-line break-words">${content.escape()}</p>
    </li>
    `;
};

export default Comment;
