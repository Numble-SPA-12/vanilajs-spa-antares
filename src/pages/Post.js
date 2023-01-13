"use strict";

import parseElementFromString from "utils/parseElementFromString";
import router from "router";
import { getPostById } from "apis/PostsAPI";
import PostArticle from "components/PostArticle";
import CommentList from "components/CommentList";

const Post = () => {
  // @TODO : Comment 없을 때 처리
  // @TODO : Comment Form 처리

  const pageString = `
    <div class="min-h-screen flex flex-col">
      <app-header type="sub"></app-header>
      <main id="post-container" class="flex-1 flex flex-col">
        ${PostArticle.Loading()}
        <aside id="post__comments" class="p-4 flex flex-col gap-4">
          <h2 id="post__comments__title" class="text-lg font-semibold">Comments</h2>
          ${CommentList.Loading()}
          <form id="post__comments__form" class="">
            <textarea name="comment" placeholder="Write a comment..."  cols="30" rows="3" class="w-full resize-none text-sm border border-gray-300 rounded-md p-2"></textarea>
            <button type="submit" class="w-20 mt-2 bg-black text-white rounded-md py-2">Submit</button>
          </form>
        </aside>
      </main>
    </div> 
  `;

  const $page = parseElementFromString(pageString);

  $page.querySelector("app-header").addEventListener("click", (e) => {
    const $target = e.target.closest("button");
    if ($target && $target.id === "back-button") {
      router.back();
    }
  });

  const { postId } = router.params();

  (async () => {
    const { data, success } = await getPostById(postId);
    if (success) {
      $page
        .querySelector("#post-article")
        .replaceWith(parseElementFromString(PostArticle(data.post)));

      $page.querySelector(
        "#post__comments__title"
      ).textContent = `Comments (${data.comments.length})`;

      $page
        .querySelector("#post__comments__list")
        .replaceWith(
          parseElementFromString(CommentList({ data: data.comments }))
        );
    }
  })();

  return $page;
};

export default Post;
