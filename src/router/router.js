"use strict";

import { Home, NotFound, NewPost } from "pages";

const $appRoot = document.getElementById("app");

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/new",
    component: NewPost,
  },
  // {
  //   path: "/post",
  //   component: PostPage,
  // },
];

const render = async (path) => {
  const _path = path ?? window.location.pathname;

  try {
    const page =
      routes.find((route) => route.path === _path)?.component || NotFound;
    $appRoot.replaceChildren(await page());
  } catch (err) {
    console.error(err);
  }
};

export const navigateTo = async (path) => {
  if (window.location.pathname === path) return;

  window.history.pushState(null, null, path);
  render(path);
};

export const initializeRouter = () => {
  window.addEventListener("popstate", () => {
    render();
  });

  window.addEventListener("DOMContentLoaded", () => {
    render();
  });
};
