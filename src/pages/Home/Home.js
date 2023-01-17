"use strict";

import PostPreview from "./components/PostPreview";
import parseElementFromString from "common/utils/parseElementFromString";
import template from "./constants/template";

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
      $fragment.append(
        PostPreview.Loading,
        PostPreview.Loading,
        PostPreview.Loading
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
