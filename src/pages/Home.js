"use strict";

import { getPosts } from "apis/PostsAPI";
import { PostPreview } from "components";
import router from "router";

const Home = async () => {
  const $main = document.createElement("div");

  $main.classList.add("flex", "flex-col", "justify-start", "min-h-screen");

  $main.innerHTML = `
    <app-header type="main"></app-header>
    <main class="flex-1 px-4 pt-4 pb-8 bg-gray-50">
      <button id="newyear-post__newpost-link" class="w-full py-3 rounded-lg bg-black text-white font-semibold text-lg mb-4">New Post</button>
      <ul id="newyear-post__list" class="flex flex-col gap-4">
        ${PostPreview.Loading().outerHTML}
        ${PostPreview.Loading().outerHTML}
        ${PostPreview.Loading().outerHTML}
        ${PostPreview.Loading().outerHTML}
      </ul>
    </main>
  `;

  $main.querySelector("#newyear-post__list").addEventListener("click", (e) => {
    const $target = e.target.closest("article");
    if ($target) {
      const id = $target.dataset.postId;
      router.push(`/posts/${id}`);
    }
  });

  $main
    .querySelector("#newyear-post__newpost-link")
    .addEventListener("click", (e) => {
      router.push("/posts/new");
    });

  (async () => {
    const $list = $main.querySelector("#newyear-post__list");
    const result = await getPosts();
    if (result.code === 200) {
      console.log(result.data);
      $list.innerHTML = result.data.posts
        .map((post) => PostPreview(post).outerHTML)
        .join("");
    }
  })();

  return $main;
};

export default Home;
