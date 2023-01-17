"use strict";

import parseElementFromString from "common/utils/parseElementFromString";
import pageTemplate from "./constants/template";
import setEventListeners from "./utils/setEventListeners";

const NewPost = () => {
  let state = {
    isLoading: false,
  };

  const setState = (newState) => {
    state = {
      ...state,
      ...newState,
    };
    render();
  };

  const render = () => {
    const $app = document.querySelector("#app");
    const $page = parseElementFromString(pageTemplate);
    // TODO : 로딩 처리
    setEventListeners($page);
    $app.replaceChildren($page);
  };

  render();
};

export default NewPost;
