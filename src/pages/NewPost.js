"use strict";

const NewPost = () => {
  const $main = document.createElement("main");
  $main.classList.add(["flex", "flex-col", "justify-start"]);

  $main.innerHTML = `
    <h2>New Post</h2>  
  `;

  return $main;
};

export default NewPost;
