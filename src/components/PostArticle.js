import parseDateTime from "utils/parseDateTime";

const PostArticle = ({
  title,
  content,
  createdAt,
  image,
  postId,
  updatedAt,
}) => {
  const componentString = `
    <article class="flex flex-col border-b border-gray-400">
      <section id="post__image" class="w-full">
        <img src="${image.escape()}" class="h-full w-full object-cover aspect-[360/265]" />
      </section>
      <section id="post__content" class="px-4 pt-4 flex flex-1 flex-col gap-4">
        <div id="post__content__meta" class="flex flex-col gap-2" >
          <h2 id="post__content__title" class="text-2xl font-bold">${title.escape()}</h2>
          <time datetime="2023-01-08" class="text-sm text-gray-500" >${parseDateTime(
            createdAt
          )}</time>
        </div>
        <p class="text-gray-900 whitespace-pre-line break-words">${content.escape()}</p>
      </section>
      <section id="post__actions" class="flex gap-2 justify-end w-full px-4 py-4" >
        <button class="w-14 py-0.5 rounded-sm text-sm hover:bg-gray-200 text-gray-600">Edit</button>
        <button class="w-14 py-0.5 rounded-sm text-sm hover:bg-gray-200 text-gray-600">Delete</button>
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

PostArticle.Loading = PostArticleSkeleton;

export default PostArticle;