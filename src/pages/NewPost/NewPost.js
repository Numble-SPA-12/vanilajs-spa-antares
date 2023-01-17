"use strict";

import parseElementFromString from "common/utils/parseElementFromString";
import PostForm from "./components/PostForm";
import pageTemplate from "./constants/template";

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
