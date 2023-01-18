import parseElementFromString from "common/utils/parseElementFromString";

const template = `
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

const PostArticleSkeleton = () => {
  return parseElementFromString(template);
};

export default PostArticleSkeleton;
