"use strict";

import parseElementFromString from "utils/parseElementFromString";
import router from "router";

const NewPost = () => {
  const pageString = `
    <div class="min-h-screen flex flex-col">
      <app-header type="sub"></app-header>
      <main class="flex-1 flex flex-col bg-gray-50">
        <form id="post__form" class="flex-1 px-4 py-6 w-full flex flex-col gap-4">
          <section id="post__form__image" class="h-40 w-full bg-white rounded-md border border-gray-300 flex justify-center items-center">
            <h3 class="text-gray-500 text-lg" >Upload Image</h3>
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
          <button class="py-4 w-full bg-black text-white text-lg font-semibold rounded-md" >
            Submit
          </button>
        </form>
      </main>
    </div> 
  `;

  const $page = parseElementFromString(pageString);

  $page.querySelector("app-header").addEventListener("click", (e) => {
    console.log("click");
    const $target = e.target.closest("button");
    if ($target && $target.id === "back-button") {
      router.back();
    }
  });

  return $page;
};

export default NewPost;
