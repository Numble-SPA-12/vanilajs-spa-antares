const setCommentEvent = ($page) => {
  const $commentList = $page.querySelector("#post__comments__list");
  $commentList.addEventListener("click", commentDeleteHandler);
};

const setArticleEvent = ($page, postData) => {
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

const setFormEvent = ($page) => {
  const $form = $page.querySelector("#post__comments__form");
  $form.addEventListener("submit", formSubmitHandler);
};

const setEventListeners = ($page) => {
  setArticleEvent($page);
  setCommentEvent($page);
  setFormEvent($page);
};
