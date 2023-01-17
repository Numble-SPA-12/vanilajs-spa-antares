import router from "common/router";
import Links from "common/constants/Links";

const newPostClickHandler = (e) => {
  router.push(Links.NewPost);
};

const setEventListeners = ($page) => {
  const $newPostLink = $page.querySelector("#newyear-post__newpost-link");
  $newPostLink.addEventListener("click", newPostClickHandler);
};

export default setEventListeners;
