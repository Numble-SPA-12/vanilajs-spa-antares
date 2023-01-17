const template = `
    <div class="flex flex-col justify-start min-h-screen" > 
      <app-header type="main"></app-header>
      <main class="flex-1 px-4 pt-4 pb-8 bg-gray-50">
        <button id="newyear-post__newpost-link" class="w-full py-3 rounded-lg bg-black text-white font-semibold text-lg mb-4">New Post</button>
        <ul id="newyear-post__list" class="flex flex-col gap-4">
        </ul>
      </main>
    </div> 
  `;

export default template;
