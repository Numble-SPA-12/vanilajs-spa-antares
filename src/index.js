import "./styles/input.css";

import { Header } from "./components";
import Router from "router";
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

const router = new Router(routes);

router.init();
