class PostPreview extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["imgSrc"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    this.innerHTML = `
    <template>
      <article class="w-full rounded-sm shadow-sm">
        <section>
          <img src="https://picsum.photos/200/300" alt="Post preview image" />
        </section>
        <section>
          <h3 class="">
          </h3>
          <p class="">
          </p>
        </section>
      </article>
      </template>
    `;
  }
}

export default PostPreview;
