"use strict";

import parseElementFromString from "common/utils/parseElementFromString";
import router from "common/router";
import { createPost } from "common/apis/PostsAPI";
import { getRandomPhoto } from "common/apis/UnsplashAPI";
import { headerClickHandler } from "common/components/Header";

const imageUploaderClickHandler = async (e) => {
  const data = await getRandomPhoto();

  $image.replaceChildren(
    parseElementFromString(`
        <img src="${data.urls.full}" class="h-full w-full object-cover aspect-[1080/720]" />
      `)
  );
};

const formSubmitHandler = async (e) => {
  e.preventDefault();
  const $title = $form.querySelector("input");
  const $content = $form.querySelector("textarea");
  const $image = $form.querySelector("img");

  const post = {
    title: $title.value,
    content: $content.value,
    image: $image ? $image.src : "",
  };

  try {
    const responseData = await createPost(post);
    if (responseData.code === 201) {
      router.push(`/posts/${responseData.data.postId}`);
    }
  } catch (err) {
    console.log(err);
  } finally {
    $title.value = "";
    $content.value = "";
  }
};

const NewPost = () => {
  const pageTemplateString = `
    <div class="min-h-screen flex flex-col">
      <app-header type="sub"></app-header>
      <main class="flex-1 flex flex-col bg-gray-50">
        <form id="post__form" class="flex-1 px-4 py-6 w-full flex flex-col gap-4">
          <section id="post__form__image" class="h-56 w-full bg-white rounded-md border border-gray-300 flex justify-center items-center overflow-hidden">
            <button type="button" class="text-gray-500 text-lg font-semibold flex gap-2">
              <i class="bi bi-image" ></i>
              <span>Upload Image</span>
            </button>
          </section>
          <section id="post__form__article" class="w-full min-h-[300px] bg-white rounded-md border border-gray-300 flex-1 flex flex-col justify-start items-start gap-4 p-8">
            <input 
              type="text" 
              placeholder="Your Post Title Here..." 
              class="w-full text-2xl font-bold text-black placeholder:text-gray-600 placeholder:text-2xl placeholder:font-bold focus:outline-none"  
            />
            <hr class="w-full" ></hr>
            <textarea
              placeholder="Your Post Content Here..."
              class="w-full text-black whitespace-pre-wrap flex-1 placeholder:text-gray-500 focus:outline-none resize-none"
            ></textarea>
          </section>
          <button type="submit" class="py-4 w-full bg-black text-white text-lg font-semibold rounded-md" >
            Submit
          </button>
        </form>
      </main>
    </div> 
  `;

  let state = {};

  const setEventListeners = ($page) => {
    $page
      .querySelector("app-header")
      .addEventListener("click", headerClickHandler);
    const $form = $page.querySelector("#post__form");
    const $image = $page.querySelector("#post__form__image");
    $image.addEventListener("click", imageUploaderClickHandler);
    $form.addEventListener("submit", formSubmitHandler);
  };

  const render = () => {
    const $app = document.querySelector("#app");
    const $page = parseElementFromString(pageTemplateString);
    setEventListeners($page);
    $app.replaceChildren($page);
  };

  render();
};

export default NewPost;
