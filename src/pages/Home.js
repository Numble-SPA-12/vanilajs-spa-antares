"use strict";

import { PostPreview } from "components";
import router from "router";

const data = [
  {
    id: 1,
    title: "제목",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imgSrc: "https://picsum.photos/id/1/100/100",
  },
  {
    id: 2,
    title: "제목",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imgSrc: "https://picsum.photos/id/2/100/100",
  },
  {
    id: 3,
    title: "제목",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imgSrc: "https://picsum.photos/id/3/100/100",
  },
  {
    id: 4,
    title: "제목",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imgSrc: "https://picsum.photos/id/4/100/100",
  },
  {
    id: 5,
    title: "제목",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imgSrc: "https://picsum.photos/id/5/100/100",
  },
  {
    id: 6,
    title: "제목",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imgSrc: "https://picsum.photos/id/6/100/100",
  },
  {
    id: 7,
    title: "제목",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imgSrc: "https://picsum.photos/id/7/100/100",
  },
  {
    id: 8,
    title: "제목",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imgSrc: "https://picsum.photos/id/8/100/100",
  },
];

const Home = () => {
  const $main = document.createElement("div");

  $main.classList.add("flex", "flex-col", "justify-start", "min-h-screen");

  $main.innerHTML = `
    <app-header type="main"></app-header>
    <main class="flex-1 px-4 pt-4 pb-8 bg-gray-50">
      <button id="newyear-post__newpost-link" class="w-full py-3 rounded-lg bg-black text-white font-semibold text-lg mb-4">New Post</button>
      <ul id="newyear-post__list" class="flex flex-col gap-4">
        ${PostPreview.Loading().outerHTML}
        ${data.map((post) => PostPreview(post).outerHTML).join("")}
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

  return $main;
};

export default Home;
