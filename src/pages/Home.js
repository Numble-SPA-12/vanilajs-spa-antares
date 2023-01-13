"use strict";

import { getPosts } from "apis/PostsAPI";
import { PostPreview } from "components";
import router from "router";
import parseElementFromString from "utils/parseElementFromString";

const Home = async () => {
  const pageString = `
    <div class="flex flex-col justify-start min-h-screen" > 
      <app-header type="main"></app-header>
      <main class="flex-1 px-4 pt-4 pb-8 bg-gray-50">
        <button id="newyear-post__newpost-link" class="w-full py-3 rounded-lg bg-black text-white font-semibold text-lg mb-4">New Post</button>
        <ul id="newyear-post__list" class="flex flex-col gap-4">
          ${PostPreview.Loading()}
          ${PostPreview.Loading()}
          ${PostPreview.Loading()}
          ${PostPreview.Loading()}
        </ul>
      </main>
    </div> 
  `;

  const $page = parseElementFromString(pageString);

  $page.querySelector("#newyear-post__list").addEventListener("click", (e) => {
    const $target = e.target.closest("article");
    if ($target) {
      const id = $target.dataset.postId;
      router.push(`/posts/${id}`);
    }
  });

  $page
    .querySelector("#newyear-post__newpost-link")
    .addEventListener("click", (e) => {
      router.push("/posts/new");
    });

  (async () => {
    const $list = $page.querySelector("#newyear-post__list");
    const result = await getPosts();
    if (result.code === 200) {
      console.log(result.data);
      $list.innerHTML = result.data.posts
        .map((post) => PostPreview(post))
        .join("");
    }
  })();

  return $page;
};

export default Home;
