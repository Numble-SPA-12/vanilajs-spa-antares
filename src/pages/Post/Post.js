"use strict";

import parseElementFromString from "common/utils/parseElementFromString";
import router from "common/router";
import pageTemplate from "./constants/template";
import fetchPostAndComment from "./utils/fetchPostAndComment";
import PostArticle from "./components/PostArticle";
import PostEditor from "./components/PostEditor";
import CommentList from "./components/CommentList";
import CommentUploader from "./components/CommentUploader";

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
      const $commentListSkeleton = CommentList.Loading();
      $commentListPlaceholder.replaceWith($commentListSkeleton);
    } else {
      const $commentList = CommentList(state.comments, setState);
      $commentListPlaceholder.replaceWith($commentList);
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
