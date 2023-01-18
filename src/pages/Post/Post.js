"use strict";

import parseElementFromString from "common/utils/parseElementFromString";
import fetchPostAndComment from "./utils/fetchPostAndComment";
import PostArticle from "./components/PostArticle";
import PostEditor from "./components/PostEditor";
import CommentList from "./components/CommentList";
import CommentUploader from "./components/CommentUploader";

const pageTemplate = `
    <div class="min-h-screen flex flex-col max-w-[640px] mx-auto">
      <app-header type="sub"></app-header>
      <main id="post-container" class="flex-1 flex flex-col">
        <div id="article__placeholder"></div>
        <aside id="post__comments" class="p-4 flex flex-col gap-4">
          <h2 id="post__comments__title" class="text-lg font-semibold">Comments</h2>
          <div id="commentlist__placeholder"></div>
          <div id="commentuploader__placeholder"></div>
        </aside>
      </main>
    </div> 
  `;

const Post = () => {
  let state = {
    post: null,
    comments: [],
    mode: "view",
    isLoading: false,
  };

  const setState = (param) => {
    if (typeof param === "function") {
      state = param(state);
    } else {
      state = { ...state, ...param };
    }

    render();
  };

  const render = () => {
    const $app = document.querySelector("#app");
    const $page = parseElementFromString(pageTemplate);

    const $articlePlaceholder = $page.querySelector("#article__placeholder");
    if (state.mode === "view") {
      if (!state.post || (!state.post && state.isLoading)) {
        const $postArticleSkeleton = PostArticle.Loading();
        $articlePlaceholder.replaceWith($postArticleSkeleton);
      } else {
        const $article = PostArticle(state.post, setState);
        $articlePlaceholder.replaceWith($article);
      }
    }
    if (state.mode === "edit") {
      const $postEditor = PostEditor(state.post, setState);
      $articlePlaceholder.replaceWith($postEditor);
    }

    const $commentListPlaceholder = $page.querySelector(
      "#commentlist__placeholder"
    );
    if (state.isLoading) {
      $commentListPlaceholder.replaceWith(CommentList.Loading());
    } else {
      $commentListPlaceholder.replaceWith(
        CommentList(state.comments, setState)
      );
    }

    const $commentUploaderPlaceholder = $page.querySelector(
      "#commentuploader__placeholder"
    );
    const $commentUploader = CommentUploader(setState);
    $commentUploaderPlaceholder.replaceWith($commentUploader);

    $app.replaceChildren($page);
  };

  render();
  fetchPostAndComment(setState);
};

export default Post;
