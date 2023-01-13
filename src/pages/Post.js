"use strict";

const Post = () => {
  const $main = document.createElement("main");
  $main.classList.add(["flex", "flex-col", "justify-start"]);

  $main.innerHTML = `
    <h2>PostId Post</h2>  
  `;

  return $main;
};

export default Post;
