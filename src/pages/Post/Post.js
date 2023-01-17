"use strict";

import parseElementFromString from "common/utils/parseElementFromString";
import router from "common/router";
import { getPostById, deletePost } from "common/apis/PostsAPI";
import PostArticle from "./components/PostArticle";
import CommentList from "./components/CommentList";
import CommentUploader from "./components/CommentUploader";
import { createComment, deleteComment } from "common/apis/CommentsAPI";

const headerClickHandler = (e) => {
  const $target = e.target.closest("button");
  if ($target && $target.id === "back-button") {
    router.back();
  }
};

const commentDeleteHandler = async (e) => {
  const $target = e.target.closest("button");
  if ($target && $target.dataset.commentId) {
    try {
      const { code } = await deleteComment($target.dataset.commentId);
      if (code === 200) {
        fetchPostAndComment();
      }
    } catch (err) {
      console.error(err);
      if (err.response.status === 400) {
        alert(err.response.data.message);
      }
    }
  }
};

const formSubmitHandler = async (e) => {
  e.preventDefault();
  const $textarea = $form.querySelector("textarea");
  const comment = $textarea.value.trim();
  if (!comment) return;

  const { postId } = router.params();

  try {
    const responseData = await createComment(postId, comment);
    if (responseData.code === 201) {
      $textarea.value = "";
      fetchPostAndComment();
    }
  } catch (err) {
    if (err.response.status === 400) {
      alert(err.response.data.message);
    }
  }
};

const Post = () => {
  const pageString = `
    <div class="min-h-screen flex flex-col">
      <app-header type="sub"></app-header>
      <main id="post-container" class="flex-1 flex flex-col">
        ${PostArticle.Loading}
        <aside id="post__comments" class="p-4 flex flex-col gap-4">
          <h2 id="post__comments__title" class="text-lg font-semibold">Comments</h2>
          ${CommentList.Loading}
          ${CommentUploader()}
        </aside>
      </main>
    </div> 
  `;

  let state = {
    post: null,
    comments: null,
    mode: "view",
  };

  const { postId } = router.params();

  const setCommentEvent = () => {
    const $commentList = $page.querySelector("#post__comments__list");
    $commentList.addEventListener("click", commentDeleteHandler);
  };
  const setArticleEvent = (postData) => {
    const articleEventHandler = async (e) => {
      const $target = e.target.closest("button");
      const { postId } = router.params();
      if ($target && $target.id === "post__actions__delete") {
        if (!confirm("정말 삭제하시겠습니까?")) return;
        try {
          const { code } = await deletePost(postId);
          if (code === 200) {
            router.push("/");
          }
        } catch (err) {
          console.error(err);
          if (err.response.status === 400) {
            alert(err.response.data.message);
          }
        }
      } else if ($target && $target.id === "post__actions__edit") {
        $article.replaceWith(PostArticle.Edit(postData));
      }
    };

    $article.addEventListener("click", articleEventHandler);
  };
  const fetchPostAndComment = async () => {
    const { data, success } = await getPostById(postId);
    if (success) {
      document
        .querySelector("#post-article")
        .replaceWith(parseElementFromString(PostArticle(data.post)));

      setArticleEvent(data.post);

      document.querySelector(
        "#post__comments__title"
      ).textContent = `Comments (${data.comments.length})`;

      document
        .querySelector("#post__comments__list")
        .replaceWith(
          parseElementFromString(CommentList({ data: data.comments }))
        );
      setCommentEvent();
    }
  };

  const render = () => {
    const $app = document.querySelector("#app");
    const $page = parseElementFromString(pageString);

    $page
      .querySelector("app-header")
      .addEventListener("click", headerClickHandler);
    const $form = $page.querySelector("#post__comments__form");
    $form.addEventListener("submit", formSubmitHandler);

    $app.replaceWith($page);
  };

  render();
  fetchPostAndComment();
};

export default Post;
