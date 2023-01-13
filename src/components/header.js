"use strict";

class Header extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["type"];
  }

  render(el) {
    const headerType = el.getAttribute("type");
    // @TODO : Prev Icon 위치 조정
    // @TODO : Prev Icon 클릭 시 이전 페이지로 이동
    switch (headerType) {
      case "main":
        el.innerHTML = `
          <header class="flex fixed bg-white top-0 items-center justify-start w-full gap-2 px-4 border-b border-gray-200 h-14">
              <h1 class="font-bold text-xl">HPNY 2023</h1>
              <div class="flex-1"></div>
          </header>
          <div class="h-14 w-full bg-gray-50"></div>
        `;
        break;
      case "sub":
        el.innerHTML = `
          <header class="flex fixed bg-white top-0 items-center justify-start w-full gap-2 px-4 border-b border-gray-200 h-14">
              <button id="back-button" class="w-10 h-10">
                <i class="bi bi-chevron-left text-lg"></i>
              </button>
              <h1 class="font-bold text-xl">HPNY 2023</h1>
              <div class="flex-1"></div>
          </header>
          <div class="h-14 w-full bg-gray-50"></div>
        `;
        break;
    }
  }

  /**
   * 이 컴포넌트가 DOM에 추가될 때 호출됩니다.
   */
  connectedCallback() {
    this.render(this);
  }

  /**
   * 이 컴포넌트가 DOM에서 제거될 때 호출됩니다.
   */
  disconnectedCallback() {
    console.log("disconnected");
  }

  /**
   * 이 컴포넌트가 다른 DOM에 추가될 때 호출됩니다.
   */
  adoptedCallback() {
    console.log("adopted");
  }

  /**
   * 이 컴포넌트의 속성이 변경될 때 호출됩니다.
   * @param {*} name
   * @param {*} oldValue
   * @param {*} newValue
   */
  attributeChangedCallback(name, oldValue, newValue) {
    this.render(this);
  }
}

export default Header;

// customElements.define("app-header", Header);
