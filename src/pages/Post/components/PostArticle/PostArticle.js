import router from "common/router";
import parseDateTime from "common/utils/parseDateTime";
import parseElementFromString from "common/utils/parseElementFromString";
import PostArticleSkeleton from "./PostArticleSkeleton";
import { deleteButtonEventHandler, getEditButtonClickHandler } from "./utils";

const postArticleTemplate = (post) => `
    <article id="post-article" class="flex flex-col border-b border-gray-400">
      <section id="post__image" class="w-full">
        <img src="${post.image.escape()}" class="h-full w-full object-cover aspect-[360/265]" />
      </section>
      <section id="post__content" class="px-4 pt-4 flex flex-1 flex-col gap-4">
        <div id="post__content__meta" class="flex flex-col gap-2" >
          <h2 id="post__content__title" class="text-2xl font-bold break-all">${post.title.escape()}</h2>
        </div>
        <p class="text-gray-900 whitespace-pre-line break-words">${post.content.escape()}</p>
      </section>
      <section class="flex justify-between w-full px-4 py-4" >
        <time datetime="${
          post.createdAt
        }" class="text-sm text-gray-500" >${parseDateTime(post.createdAt, {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
})}</time>
      <div id="post__actions" class="flex gap-2">
        <button id="post__actions__edit" data-action="edit" class="w-14 py-0.5 rounded-sm text-sm hover:bg-gray-200 text-gray-600">Edit</button>
        <button id="post__actions__delete" data-action="delete" class="w-14 py-0.5 rounded-sm text-sm hover:bg-gray-200 text-gray-600">Delete</button>
        </div>
      </section>
    </article>
  `;

const PostArticle = (post, setState) => {
  const { postId } = router.query;

  const $postArticle = parseElementFromString(postArticleTemplate(post));
  const $editButton = $postArticle.querySelector("#post__actions__edit");
  const $deleteButton = $postArticle.querySelector("#post__actions__delete");

  $editButton.addEventListener("click", getEditButtonClickHandler(setState));
  $deleteButton.addEventListener("click", deleteButtonEventHandler(postId));

  return $postArticle;
};

PostArticle.Loading = PostArticleSkeleton;

export default PostArticle;
