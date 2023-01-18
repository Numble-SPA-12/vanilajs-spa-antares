"use strict";

import parseElementFromString from "common/utils/parseElementFromString";
import fetchPosts from "./utils/fetchPosts";
import PostList from "./components/PostList";
import NewPostLink from "./components/NewPostLink";

const pageTemplate = `
    <div class="flex flex-col justify-start min-h-screen max-w-[640px] mx-auto" > 
      <app-header type="main"></app-header>
      <main class="flex-1 px-4 pt-4 pb-8 bg-gray-50">
      </main>
    </div> 
  `;

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
    const $page = parseElementFromString(pageTemplate);

    const $fragment = document.createDocumentFragment();
    $fragment.append(NewPostLink());
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
