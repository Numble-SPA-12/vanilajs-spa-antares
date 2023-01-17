import parseElementFromString from "common/utils/parseElementFromString";
import { updatePost } from "common/apis/PostsAPI";
import { getRandomPhoto } from "common/apis/UnsplashAPI";

const PostEditor = (post, setState) => {
  const { image, title, postId, content, createdAt, updatedAt } = post;

  const componentString = `
    <form id="post__edit-form" class="flex flex-col border-b border-gray-400 min-h-[800px]">
      <section id="post__image" class="w-full relative">
        <button id="post__image__edit" type="button" class="absolute z-10 top-[calc(50%-18px)] left-[calc(50%-5rem)] w-40 whitespace-nowrap py-1 rounded-md border-2 border-white/50 text-white/50 hover:border-white hover:text-white">
          Change Image
        </button>
        <img src="${image.escape()}" class="h-full w-full object-cover aspect-[360/265] brightness-75" />
      </section>
      <section id="post__content" class="px-4 pt-4 flex flex-1 flex-col gap-4">
        <input type="text" placeholder="Your Post Title Here..." value="${title.escape()}" class="w-full text-2xl font-bold text-black placeholder:text-gray-600 placeholder:text-2xl placeholder:font-bold focus:outline-none bg-transparent" ></input>
        <hr class="w-full" ></hr>
        <textarea placeholder="Your Post Content Here..." class="w-full text-black whitespace-pre-wrap flex-1 placeholder:text-gray-500 focus:outline-none resize-none border border-gray-300 p-2 rounded-sm" >${content.escape()}</textarea>
      </section>
      <section id="post__actions" class="flex gap-2 justify-end w-full px-4 py-4">
        <button type="button" id="post__actions__cancel" class="w-14 py-0.5 rounded-sm text-sm hover:bg-gray-200 text-gray-600">Cancel</button>
        <button type="submit" id="post__actions__save" class="w-14 py-0.5 rounded-sm text-sm hover:bg-gray-200 text-gray-600">Save</button>
      </section>
    </form>
  `;

  const $Form = parseElementFromString(componentString);

  const $Image = $Form.querySelector("#post__image > img");
  const $ImageEditBtn = $Form.querySelector("#post__image__edit");
  $ImageEditBtn.addEventListener("click", async () => {
    try {
      const data = await getRandomPhoto();
      $Image.src = data.urls.full;
    } catch (err) {
      console.error(err);
    }
  });

  const $CancelBtn = $Form.querySelector("#post__actions__cancel");
  $CancelBtn.addEventListener("click", () => {
    setState({
      mode: "view",
    });
  });

  $Form.addEventListener("submit", async (e) => {
    const $TitleInput = e.target.querySelector("input");
    const $ContentArea = e.target.querySelector("textarea");

    e.preventDefault();
    if (!$TitleInput.value.trim() || !$ContentArea.value.trim()) {
      alert("Please fill all fields");
      return;
    }

    const payload = {
      title: $TitleInput.value.trim().escape(),
      content: $ContentArea.value.trim().escape(),
      image: $Image.src,
    };

    try {
      const { code, data } = await updatePost(postId, payload);
      if (code === 200) {
        const newPostData = {
          ...post,
          ...data.post,
        };
        setState({
          mode: "view",
          post: newPostData,
        });
      }
    } catch (err) {
      console.error(err);
      if (err.response.status === 400) {
        alert(err.response.data.message);
      }
    }
  });

  return $Form;
};

export default PostEditor;
