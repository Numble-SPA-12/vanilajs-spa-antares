"use strict";

import PostPreview from "./components/PostPreview";
import parseElementFromString from "common/utils/parseElementFromString";
import template from "./constants/template";
import setEventListeners from "./utils/setEventListeners";
import fetchPosts from "./utils/fetchPosts";

const Home = async () => {
  let state = {
    posts: [],
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
    const $page = parseElementFromString(template);

    const $list = $page.querySelector("#newyear-post__list");
    const $fragment = document.createDocumentFragment();

    if (state.isLoading) {
      Array.from({ length: 3 }).forEach((_, i) =>
        $fragment.append(PostPreview.Loading())
      );
    } else {
      const postPreviews = state.posts.map((post) => PostPreview(post));
      $fragment.append(...postPreviews);
    }
    $list.append($fragment);

    setEventListeners($page);
    $app.replaceChildren($page);
  };

  render();
  fetchPosts(setState);
};

export default Home;
