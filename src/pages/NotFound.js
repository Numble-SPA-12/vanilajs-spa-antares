"use strict";

const NotFound = () => {
  const pageString = `
    <div class="flex flex-col justify-start min-h-screen" > 
      <app-header type="sub"></app-header>
      <main class="flex-1 px-4 pt-4 pb-8 bg-gray-50 flex flex-col justify-center items-center gap-2">
        <h1 class="text-4xl font-bold text-gray-900">404</h1>
        <p class="text-xl text-gray-700">Page not found</p>
        <a href="/" class="text-blue-500 mt-6">Go back to home</a>
      </main>
    </div> 
  `;

  const $page = document.createRange().createContextualFragment(pageString);

  return $page;
};

export default NotFound;
