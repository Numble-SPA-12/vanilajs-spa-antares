"use strict";

import parseElementFromString from "common/utils/parseElementFromString";
import router from "common/router";
import pageTemplate from "./constants/template";
import fetchPostAndComment from "./utils/fetchPostAndComment";
import PostArticle from "./components/PostArticle";
import PostEditor from "./components/PostEditor";

const Post = () => {
  let state = {
    post: null,
    comments: null,
    mode: "view",
    isLoading: false,
  };

  const setState = (newState) => {
    state = { ...state, ...newState };
    render();
  };

  const render = () => {
    const $app = document.querySelector("#app");
    const $page = parseElementFromString(pageTemplate);

    const $articlePlaceholder = $page.querySelector("#article__placeholder");
    if (state.mode === "view") {
      if (state.isLoading || !state.post) {
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

    // const $commentListPlaceholder = $page.querySelector(
    //   "#commentlist__placeholder"
    // );
    // if (state.isLoading) {
    //   const $commentListSkeleton = CommentList.Loading();
    //   $commentListPlaceholder.replaceWith($commentListSkeleton);
    // } else {
    //   const $commentList = CommentList(state.comments);
    //   $commentListPlaceholder.replaceWith($commentList);
    // }

    // const $commentUploaderPlaceholder = $page.querySelector(
    //   "#commentuploader__placeholder"
    // );
    // $commentUploaderPlaceholder.replaceWith(CommentUploader());

    $app.replaceChildren($page);
  };

  render();
  const { postId } = router.params();
  fetchPostAndComment(postId, setState);
};

export default Post;
