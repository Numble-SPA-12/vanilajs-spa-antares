import parseElementFromString from "utils/parseElementFromString";

const PostPreview = ({ id, title = "제목", content = "내용", imgSrc = "" }) => {
  const componentString = `
    <article id="newyear-post-${id}" data-post-id="${id}" class="flex rounded-md border bg-white border-gray-300 overflow-hidden cursor-pointer">
      <section class="shrink-0 w-30 h-30">
        <img src="${imgSrc}" loading="lazy" />
      </section>
      <section class="flex flex-1 flex-col justify-between px-3 py-4 gap-2 overflow-hidden">
        <h2 class="text-lg font-bold">${title}</h2>
        <p class="text-sm text-gray-500 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">${content}</p>
      </section>
    </article>
  `;

  const component = parseElementFromString(componentString);

  return component;
};

export default PostPreview;
