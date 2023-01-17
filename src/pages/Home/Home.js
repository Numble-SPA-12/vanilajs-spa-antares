"use strict";

import parseElementFromString from "common/utils/parseElementFromString";
import template from "./constants/template";
import fetchPosts from "./utils/fetchPosts";
import PostList from "./components/PostList";

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

    const $listPlaceholder = $page.querySelector(
      "#newyear-post__list__placeholder"
    );
    if (state.isLoading) {
      $listPlaceholder.replaceChildren(PostList.Loading());
    } else {
      $listPlaceholder.replaceChildren(PostList(state.posts));
    }

    // setEventListeners($page);
    $app.replaceChildren($page);
  };

  render();
  fetchPosts(setState);
};

export default Home;
