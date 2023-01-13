"use strict";

import parseElementFromString from "utils/parseElementFromString";
import router from "router";
import { getPostById } from "apis/PostsAPI";
import PostArticle from "components/PostArticle";

const Post = () => {
  // @TODO : fetch post data from server
  // @TODO : Comment 없을 때 처리
  // @TODO : Comment Form 처리
  const pageString = `
    <div class="min-h-screen flex flex-col">
      <app-header type="sub"></app-header>
      <main id="post-container" class="flex-1 flex flex-col">
        ${PostArticle.Loading()}
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
                      <span class=" font-semibold">username</span>
                    </div>
                    <p class="" >
                      lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </p>
                  </li>
                `
              )
              .join("")}
          </ul>
          <form id="post__comments__form" class="">
            <textarea name="comment" id="comment" cols="30" rows="3" class="w-full resize-none text-sm border border-gray-300 rounded-md p-2"></textarea>
            <button type="submit" class="w-20 mt-2 bg-black text-white rounded-md py-2">Submit</button>
          </form>
        </aside>
      </main>
    </div> 
  `;

  const $page = parseElementFromString(pageString);

  $page.querySelector("app-header").addEventListener("click", (e) => {
    const $target = e.target.closest("button");
    if ($target && $target.id === "back-button") {
      router.back();
    }
  });

  const { postId } = router.params();

  (async () => {
    const { data, success } = await getPostById(postId);
    if (success) {
      $page.querySelector("#post-container").innerHTML = PostArticle(data.post);
    }
  })();

  return $page;
};

export default Post;
