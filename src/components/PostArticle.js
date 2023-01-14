import { updatePost } from "apis/PostsAPI";
import { getRandomPhoto } from "apis/UnsplashAPI";
import router from "router";
import parseDateTime from "utils/parseDateTime";
import parseElementFromString from "utils/parseElementFromString";

const PostArticle = ({
  title,
  content,
  createdAt,
  image,
  postId,
  updatedAt,
}) => {
  const componentString = `
    <article id="post-article" class="flex flex-col border-b border-gray-400">
      <section id="post__image" class="w-full">
        <img src="${image.escape()}" class="h-full w-full object-cover aspect-[360/265]" />
      </section>
      <section id="post__content" class="px-4 pt-4 flex flex-1 flex-col gap-4">
        <div id="post__content__meta" class="flex flex-col gap-2" >
          <h2 id="post__content__title" class="text-2xl font-bold break-all">${title.escape()}</h2>
          <time datetime="${createdAt}" class="text-sm text-gray-500" >${parseDateTime(
    createdAt
  )}</time>
        </div>
        <p class="text-gray-900 whitespace-pre-line break-words">${content.escape()}</p>
      </section>
      <section id="post__actions" class="flex gap-2 justify-end w-full px-4 py-4" >
        <button id="post__actions__edit" data-action="edit" class="w-14 py-0.5 rounded-sm text-sm hover:bg-gray-200 text-gray-600">Edit</button>
        <button id="post__actions__delete" data-action="delete" class="w-14 py-0.5 rounded-sm text-sm hover:bg-gray-200 text-gray-600">Delete</button>
      </section>
    </article>
  `;

  return componentString;
};

const PostArticleSkeleton = () => {
  const componentString = `
    <article id="post-article" class="flex flex-col border-b border-gray-400">
      <section id="post__image" class="w-full h-64 bg-gray-200 animate-pulse">
      </section>
      <section id="post__content" class="px-4 pt-4 flex flex-1 flex-col gap-4">
        <div id="post__content__meta" class="flex flex-col gap-2" >
          <div class="w-1/3 h-5 bg-gray-200 rounded-sm animate-pulse"></div>
          <div class="w-full h-3 bg-gray-200 rounded-sm animate-pulse"></div>
        </div>
        <div>
          <div class="w-full h-24 bg-gray-200 rounded-sm animate-pulse"></div>
        </div>
      </section>
      <section id="post__actions" class="flex gap-2 justify-end w-full px-4 py-4" >
      </section>
    </article>
  `;

  return componentString;
};

const PostArticleEdit = (post) => {
  const { image, title, postId, content, createdAt, updatedAt } = post;

  const $TitleInput = document.createElement("input");
  $TitleInput.type = "text";
  $TitleInput.placeholder = "Your Post Title Here...";
  $TitleInput.value = title;
  $TitleInput.classList.add(
    "w-full",
    "text-2xl",
    "font-bold",
    "text-black",
    "placeholder:text-gray-600",
    "placeholder:text-2xl",
    "placeholder:font-bold",
    "focus:outline-none"
  );

  const $Hr = document.createElement("hr");
  $Hr.classList.add("w-full");

  const $ContentArea = document.createElement("textarea");
  $ContentArea.placeholder = "Your Post Content Here...";
  $ContentArea.value = content;
  $ContentArea.classList.add(
    "w-full",
    "text-black",
    "whitespace-pre-wrap",
    "flex-1",
    "placeholder:text-gray-500",
    "focus:outline-none",
    "resize-none",
    "border",
    "border-gray-300",
    "p-2",
    "rounded-sm"
  );

  const componentString = `
    <form id="post__edit-form" class="flex flex-col border-b border-gray-400 min-h-[800px]">
      <section id="post__image" class="w-full relative">
        <button id="post__image__edit" type="button" class="absolute z-10 top-[calc(50%-18px)] left-[calc(50%-5rem)] w-40 whitespace-nowrap py-1 rounded-md border-2 border-white/50 text-white/50 hover:border-white hover:text-white">
          Change Image
        </button>
        <img src="${image.escape()}" class="h-full w-full object-cover aspect-[360/265] brightness-75" />
      </section>
      <section id="post__content" class="px-4 pt-4 flex flex-1 flex-col gap-4">
      </section>
      <section id="post__actions" class="flex gap-2 justify-end w-full px-4 py-4" >
        <button type="button" id="post__actions__cancel"  class="w-14 py-0.5 rounded-sm text-sm hover:bg-gray-200 text-gray-600">Cancel</button>
        <button type="submit" id="post__actions__save"  class="w-14 py-0.5 rounded-sm text-sm hover:bg-gray-200 text-gray-600">Save</button>
      </section>
    </form>
  `;

  const $Form = parseElementFromString(componentString);

  // render form
  const $PostContent = $Form.querySelector("#post__content");
  $PostContent.appendChild($TitleInput);
  $PostContent.appendChild($Hr);
  $PostContent.appendChild($ContentArea);

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
    // TODO : render post article
    // $Component.replaceWith(parseElementFromString(PostArticle(post)));
    router.reload();
  });

  $Form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!$TitleInput.value.trim() || !$ContentArea.value.trim()) {
      alert("Please fill all fields");
      return;
    }

    const post = {
      title: $TitleInput.value.trim().escape(),
      content: $ContentArea.value.trim().escape(),
      image: $Image.src,
    };

    try {
      const { code, data } = await updatePost(postId, post);
      if (code === 200) {
        // TODO : newPostData 이용해서 update
        const newPostData = {
          ...post,
          ...data.post,
        };
        router.reload();
      }
    } catch (err) {
      console.error(err);
      alert(err.response.data.message);
    }
  });

  return $Form;
};

PostArticle.Loading = PostArticleSkeleton();
PostArticle.Edit = PostArticleEdit;

export default PostArticle;
