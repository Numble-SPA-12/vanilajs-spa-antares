import router from "common/router";
import { createPost } from "common/apis/PostsAPI";
import { getRandomPhoto } from "common/apis/UnsplashAPI";
import { headerClickHandler } from "common/components/Header";
import parseElementFromString from "common/utils/parseElementFromString";

const imageUploaderClickHandler = async (e) => {
  const data = await getRandomPhoto();

  const $image = e.target.closest("#post__form__image");

  $image.replaceChildren(
    parseElementFromString(`
        <img src="${data.urls.full}" class="h-full w-full object-cover aspect-[1080/720]" />
      `)
  );
};

const formSubmitHandler = async (e) => {
  e.preventDefault();

  const $form = e.target.closest("#post__form");

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
    if (err.response.status === 400) {
      alert("제목과 내용을 입력해주세요.");
    }
  } finally {
    $title.value = "";
    $content.value = "";
  }
};

const setEventListeners = ($page) => {
  $page
    .querySelector("app-header")
    .addEventListener("click", headerClickHandler);
  const $form = $page.querySelector("#post__form");
  const $image = $page.querySelector("#post__form__image");
  $image.addEventListener("click", imageUploaderClickHandler);
  $form.addEventListener("submit", formSubmitHandler);
};

export default setEventListeners;
