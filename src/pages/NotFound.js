"use strict";

import Link from "common/components/Link";
import Links from "common/constants/Links";

const NotFound = () => {
  const pageString = `
    <div class="flex flex-col justify-start min-h-screen max-w-[640px] mx-auto" > 
      <app-header type="sub"></app-header>
      <main class="flex-1 px-4 pt-4 pb-8 bg-gray-50 flex flex-col justify-center items-center gap-2">
        <h1 class="text-4xl font-bold text-gray-900">404</h1>
        <p class="text-xl text-gray-700">Page not found</p>
      </main>
    </div> 
  `;

  const render = () => {
    const $app = document.querySelector("#app");
    const $page = document.createRange().createContextualFragment(pageString);
    const $main = $page.querySelector("main");
    $main.appendChild(
      Link({
        href: Links.Home,
        label: "Go back to home",
        className: "text-blue-500 mt-6",
      })
    );
    $app.appendChild($page);
  };

  render();
};

export default NotFound;
