import Links from "common/constants/Links";

const template = `
    <div class="flex flex-col justify-start min-h-screen" > 
      <app-header type="main"></app-header>
      <main class="flex-1 px-4 pt-4 pb-8 bg-gray-50">
        <a id="newyear-post__newpost-link" class="w-full py-3 rounded-lg bg-black text-white font-semibold text-lg mb-4 flex justify-center" href="${Links.NewPost}">New Post</a>
        <div id="newyear-post__list__placeholder" ></div>
        <ul id="newyear-post__list" class="flex flex-col gap-4">
        </ul>
      </main>
    </div> 
  `;

export default template;
