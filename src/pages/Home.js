"use strict";

const Home = () => {
  const $main = document.createElement("div");
  $main.classList.add(["flex", "flex-col", "justify-start", "min-h-screen"]);

  $main.innerHTML = `
    <app-header type="main"></app-header>
    <main class="flex-1 flex flex-col justify-start">
      <post-preview >
        <span slot="title">신년 계획</span>
        <span slot="content">신년 계획</span>
      </post-preview>
    </main>
  `;

  return $main;
};

export default Home;
