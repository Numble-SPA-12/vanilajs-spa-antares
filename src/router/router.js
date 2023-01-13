"use strict";

import { Home, NotFound, NewPost, Post } from "pages";

class Router {
  constructor() {
    this.$appRoot = document.getElementById("app");
  }

  /**
   * @type {Object} - key-value pairs of routes
   */
  routes = {
    "/posts": Home,
    "/posts/new": NewPost,
    "/posts/:postId": Post,
  };

  /**
   * @type {Object}
   * @property {string} path - path of the current route
   * @property {Object} params - key-value pairs of params
   * @property {string} search - search query
   */
  currentPathInfo = {
    path: "",
    params: {},
    search: "",
  };

  /**
   *
   * @param {string} currentPath
   * @param {string} matchingPath
   */
  async setPathInfo(currentPath, matchingPath) {
    const dissolvedPath = currentPath.split("/");

    if (matchingPath) {
      const pathInfo = {};
      pathInfo.path = currentPath;
      pathInfo.params = {};
      matchingPath.split("/").forEach((path, index) => {
        if (path.startsWith(":")) {
          pathInfo.params[path.slice(1)] = dissolvedPath[index];
        }
      });
      pathInfo.search = window.location.search;
      this.currentPathInfo = pathInfo;
    } else {
      this.currentPathInfo = {
        path: currentPath,
        params: {},
        search: "",
      };
    }
  }

  $appRoot;

  async render(path) {
    const _path = path ?? window.location.pathname;

    try {
      const dissolvedPath = _path.split("/");

      /**
       * @TODO
       * :id 이용하는 라우트랑 /new 처럼 정해진 라우트에 둘다 해당하는 경우를 체크하고
       * 이에 대한 처리를 해줘야 합니다.
       *
       * 지금은 /new가 /:id 보다 먼저 정의되어 있어서 /new가 먼저 체크되어서
       * /new가 렌더링 되는데, 이를 해결해야 합니다.
       */
      const matchingRoute = Object.entries(this.routes).find(([routePath]) => {
        const routePathParts = routePath.split("/");
        if (routePathParts.length !== dissolvedPath.length) return false;

        return routePathParts.every((path, index) => {
          if (path.startsWith(":")) return true;
          return path === dissolvedPath[index];
        });
      });

      const matchingPath = matchingRoute?.[0];
      const matchingPage = matchingRoute?.[1];

      this.setPathInfo(_path, matchingPath);

      const page = matchingPage ?? NotFound;
      this.$appRoot.replaceChildren(await page());
    } catch (err) {
      console.log(err);
    }
  }

  init() {
    this.render();
    window.addEventListener("popstate", () => {
      this.render();
    });

    window.addEventListener("DOMContentLoaded", () => {
      this.render();
    });
  }

  back() {
    window.history.back();
  }

  push(path) {
    window.history.pushState({}, "", path);
    this.render(path);
  }

  replace(path) {
    window.history.replaceState({}, "", path);
    this.render(path);
  }
}

const router = new Router();

export default router;
