"use strict";

import parseElementFromString from "common/utils/parseElementFromString";
import PostForm from "./components/PostForm";

const pageTemplate = `
    <div class="min-h-screen flex flex-col max-w-[640px] mx-auto">
      <app-header type="sub"></app-header>
      <main class="flex-1 flex flex-col bg-gray-50">
      </main>
    </div> 
`;

const NewPost = () => {
  let state = {
    isLoading: false,
  };

  const setState = (newState) => {
    state = {
      ...state,
      ...newState,
    };
    render();
  };

  const render = () => {
    const $app = document.querySelector("#app");
    const $page = parseElementFromString(pageTemplate);

    const $main = $page.querySelector("main");
    $main.appendChild(PostForm(setState));

    $app.replaceChildren($page);
  };

  render();
};

export default NewPost;
