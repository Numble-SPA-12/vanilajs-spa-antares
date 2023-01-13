"use strict";

import parseElementFromString from "utils/parseElementFromString";
import router from "router";

const Post = () => {
  // @TODO : fetch post data from server
  // @TODO : Comment 없을 때 처리
  // @TODO : Comment Form 처리
  const postString = `
    <div class="min-h-screen flex flex-col">
      <app-header type="sub"></app-header>
      <main class="flex-1 flex flex-col">
        <article class="flex flex-col border-b border-gray-400">
          <section id="post__image" class="w-full">
            <img src="https://picsum.photos/id/1/360/265" class="h-full w-full object-cover aspect-[360/265]" />
          </section>
          <section id="post__content" class="px-4 pt-4 pb-8 flex flex-1 flex-col gap-4">
            <div id="post__content__meta flex flex-col gap-2" >
              <h2 id="post__content__title" class="text-2xl font-semibold">제목</h2>
              <time datetime="2023-01-08" class="text-xs text-gray-500" >2023-01-08</time>
            </div>
            <p class="text-sm text-gray-900" >
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </p>
          </section>
        </article>
        <aside id="post__comments" class="p-4 flex flex-col gap-4">
          <h2 class="text-lg font-semibold">Comments&nbsp;(3)</h2>
          <ul id="post__comments__list" class="flex flex-col gap-2">
            ${Array.from({ length: 3 })
              .map(
                () =>
                  `
                  <li class="flex flex-col gap-2 pl-4 pt-2 pb-4 border-b border-gray-200 last:border-none">
                    <div class="flex items-center gap-2">
                      <img src="https://picsum.photos/id/1/360/265" class="h-8 w-8 rounded-full object-cover" />
                      <span class="text-sm font-semibold">username</span>
                    </div>
                    <p class="text-sm text-gray-500" >
                      lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </p>
                  </li>
                `
              )
              .join("")}
          </ul>
          <form id="post__comments__form" class="">
            <textarea name="comment" id="comment" cols="30" rows="3" class="w-full resize-none text-sm border border-gray-300 rounded-md p-2"></textarea>
            <button type="submit" class="w-20 mt-2 bg-blue-500 text-white rounded-md py-2">Submit</button>
          </form>
        </aside>
      </main>
    </div> 
  `;

  const $postPage = parseElementFromString(postString);

  $postPage.querySelector("app-header").addEventListener("click", (e) => {
    const $target = e.target.closest("button");
    if ($target && $target.id === "back-button") {
      router.back();
    }
  });

  return $postPage;
};

export default Post;
