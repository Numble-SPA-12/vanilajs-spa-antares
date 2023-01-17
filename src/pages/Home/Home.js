"use strict";

import { getPosts } from "common/apis/PostsAPI";
import PostPreview from "./components/PostPreview";
import router from "common/router";
import parseElementFromString from "common/utils/parseElementFromString";

const articleClickHandler = (e) => {
  console.log(e.target);
  const $target = e.target.closest("article");
  if ($target) {
    const id = $target.dataset.postId;
    router.push(`/posts/${id}`);
  }
};

const newPostClickHandler = (e) => {
  router.push("/posts/new");
};

const Home = async () => {
  let state = {
    posts: [],
    isLoading: false,
  };

  const pageTemplateString = `
    <div class="flex flex-col justify-start min-h-screen" > 
      <app-header type="main"></app-header>
      <main class="flex-1 px-4 pt-4 pb-8 bg-gray-50">
        <button id="newyear-post__newpost-link" class="w-full py-3 rounded-lg bg-black text-white font-semibold text-lg mb-4">New Post</button>
        <ul id="newyear-post__list" class="flex flex-col gap-4">
        </ul>
      </main>
    </div> 
  `;

  const setEventListeners = ($page) => {
    const $list = $page.querySelector("#newyear-post__list");
    $list.addEventListener("click", articleClickHandler);
    const $newPostLink = $page.querySelector("#newyear-post__newpost-link");
    $newPostLink.addEventListener("click", newPostClickHandler);
  };

  const render = () => {
    const $app = document.querySelector("#app");
    const $page = parseElementFromString(pageTemplateString);

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

  const setState = (newState) => {
    state = {
      ...state,
      ...newState,
    };
    render();
  };

  const fetchPosts = async () => {
    setState({
      isLoading: true,
    });
    const result = await getPosts();
    if (result.code === 200) {
      setState({
        posts: result.data.posts,
        isLoading: false,
      });
    } else {
      setState({
        isLoading: false,
      });
    }
  };

  render();
  fetchPosts();
};

export default Home;
