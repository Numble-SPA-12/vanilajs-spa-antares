"use strict";

import Links from "common/constants/Links";
import router from "common/router";
import parseElementFromString from "common/utils/parseElementFromString";

class Header extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["type"];
  }

  mainTemlate = `
    <header class="flex fixed z-20 bg-white top-0 items-center justify-start w-full gap-2 px-4 border-b border-gray-200 h-14 max-w-[640px]">
        <h1 role="link" tabindex="0" class="font-bold text-xl">HPNY 2023</h1>
        <div class="flex-1"></div>
    </header>
  `;

  subTemplate = `
    <header class="flex fixed z-20 bg-white top-0 items-center justify-start w-full gap-2 px-4 border-b border-gray-200 h-14 max-w-[640px]">
      <button id="back-button" class="w-10 h-10">
        <i class="bi bi-chevron-left text-lg"></i>
      </button>
      <h1 role="link" tabindex="0" class="font-bold text-xl">HPNY 2023</h1>
      <div class="flex-1"></div>
    </header>
  `;

  placeholderTemplate = `
    <div class="h-14 w-full bg-gray-50"></div>
  `;

  render(el) {
    const headerType = el.getAttribute("type");
    // @TODO : Prev Icon ์์น ์กฐ์ 

    const $fragment = document.createDocumentFragment();

    switch (headerType) {
      case "main": {
        const $header = parseElementFromString(this.mainTemlate);

        const $title = $header.querySelector("h1");
        $title.addEventListener("click", this.titleClickHandler);
        $title.addEventListener("keyup", this.titleEnterHandler);

        $fragment.append($header);
        break;
      }
      case "sub": {
        const $header = parseElementFromString(this.subTemplate);

        const $title = $header.querySelector("h1");
        $title.addEventListener("click", this.titleClickHandler);
        $title.addEventListener("keyup", this.titleEnterHandler);
        const $backButton = $header.querySelector("#back-button");
        $backButton.addEventListener("click", this.backButtonClickHandler);

        $fragment.append($header);
        break;
      }
    }
    $fragment.append(parseElementFromString(this.placeholderTemplate));

    el.append($fragment);
  }

  /**
   * ์ด ์ปดํฌ๋ํธ์ ์์ฑ์ด ๋ณ๊ฒฝ๋  ๋ ํธ์ถ๋ฉ๋๋ค.
   * @param {*} name
   * @param {*} oldValue
   * @param {*} newValue
   */
  attributeChangedCallback(name, oldValue, newValue) {
    this.render(this);
  }

  backButtonClickHandler(e) {
    const $target = e.target.closest("button");
    if ($target && $target.id === "back-button") {
      router.back();
    }
  }

  titleClickHandler(e) {
    const $target = e.target.closest("h1");
    if ($target) {
      router.push(Links.Home);
    }
  }

  titleEnterHandler(e) {
    if (e.key === "Enter") {
      router.push(Links.Home);
    }
  }
}

export default Header;
