const pageTemplate = `
    <div class="min-h-screen flex flex-col">
      <app-header type="sub"></app-header>
      <main id="post-container" class="flex-1 flex flex-col">
        <div id="article__placeholder"></div>
        <aside id="post__comments" class="p-4 flex flex-col gap-4">
          <h2 id="post__comments__title" class="text-lg font-semibold">Comments</h2>
          <div id="commentlist__placeholder"></div>
          <div id="commentuploader__placeholder"></div>
        </aside>
      </main>
    </div> 
  `;

export default pageTemplate;
