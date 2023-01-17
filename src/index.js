import "styles/input.css";

import router from "common/router";
import Header from "common/components/Header";
import { Home, NewPost, Post } from "pages";

customElements.define("app-header", Header);

// register escape function for String
// This is to prevent XSS attack
String.prototype.escape = function () {
  var tagsToReplace = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
  };
  return this.replace(/[&<>]/g, function (tag) {
    return tagsToReplace[tag] || tag;
  });
};

const routes = {
  "/": Home,
  "/posts": Home,
  "/posts/new": NewPost,
  "/posts/:postId": Post,
};

router.init({ routes });
