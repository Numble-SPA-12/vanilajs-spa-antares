const CommentUploader = () => {
  const componentString = `
    <form id="post__comments__form" class="">
      <textarea name="comment" placeholder="Write a comment..."  cols="30" rows="3" class="w-full resize-none text-sm border border-gray-300 rounded-md p-2"></textarea>
      <button type="submit" class="w-20 mt-2 bg-black text-white rounded-md py-2">Submit</button>
    </form>
  `;

  const $commentUploader = parseElementFromString(componentString);
  return $commentUploader;
};

export default CommentUploader;
