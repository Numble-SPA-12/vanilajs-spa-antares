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
];

const Home = () => {
  const $main = document.createElement("div");

  $main.classList.add(["flex", "flex-col", "justify-start", "min-h-screen"]);

  $main.innerHTML = `
    <app-header type="main"></app-header>
    <main class="flex-1 px-4 pt-4">
      <ul id="newyear-post__list" class="flex flex-col gap-4">
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

  return $main;
};

export default Home;
