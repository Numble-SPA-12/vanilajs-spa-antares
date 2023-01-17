import router from "common/router";
import Links from "common/constants/Links";

const articleClickHandler = (e) => {
  const $target = e.target.closest("article");
  if ($target) {
    const id = $target.dataset.postId;
    router.push(Links.Post(id));
  }
};

const newPostClickHandler = (e) => {
  router.push(Links.NewPost);
};

const setEventListeners = ($page) => {
  const $list = $page.querySelector("#newyear-post__list");
  $list.addEventListener("click", articleClickHandler);
  const $newPostLink = $page.querySelector("#newyear-post__newpost-link");
  $newPostLink.addEventListener("click", newPostClickHandler);
};

export default setEventListeners;
