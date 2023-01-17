"use strict";

import parseElementFromString from "common/utils/parseElementFromString";
import template from "./constants/template";
import fetchPosts from "./utils/fetchPosts";
import PostList from "./components/PostList";
import Link from "common/components/Link";

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

    const $fragment = document.createDocumentFragment();
    $fragment.append(
      Link({
        href: "/posts/new",
        label: "New Post",
        className:
          "w-full py-3 rounded-lg bg-black text-white font-semibold text-lg mb-4 flex justify-center",
      })
    );
    if (state.isLoading) {
      $fragment.append(PostList.Loading());
    } else {
      $fragment.append(PostList(state.posts));
    }
    const $main = $page.querySelector("main");
    $main.replaceChildren($fragment);

    $app.replaceChildren($page);
  };

  render();
  fetchPosts(setState);
};

export default Home;
