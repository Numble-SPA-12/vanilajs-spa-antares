import { updatePost } from "common/apis/PostsAPI";
import { getRandomPhoto } from "common/apis/UnsplashAPI";

export const imageEditEventHandler = async (e) => {
  const $Image = e.target.closest("form").querySelector("#post__image > img");

  try {
    const data = await getRandomPhoto();
    $Image.src = data.urls.full;
  } catch (err) {
    console.error(err);
  }
};

export const getCancelEditEventHandler = (setState) => () => {
  setState({
    mode: "view",
  });
};

export const getFormSubmitEventHandler = (post, setState) => async (e) => {
  const $TitleInput = e.target.querySelector("input");
  const $ContentArea = e.target.querySelector("textarea");
  const $Image = e.target.querySelector("#post__image > img");

  e.preventDefault();
  if (!$TitleInput.value.trim() || !$ContentArea.value.trim()) {
    alert("공백이 아닌 제목과 내용을 입력해주세요.");
    return;
  }

  const payload = {
    title: $TitleInput.value.trim().escape(),
    content: $ContentArea.value.trim().escape(),
    image: $Image.src,
  };

  if (
    payload.title === post.title &&
    payload.content === post.content &&
    payload.image === post.image
  ) {
    alert("변경사항이 없습니다.");
    return;
  }

  try {
    const { code, data } = await updatePost(post.postId, payload);
    if (code === 200) {
      const newPostData = {
        ...post,
        ...data.post,
      };
      setState({
        mode: "view",
        post: newPostData,
      });
    }
  } catch (err) {
    console.error(err);
    if (err.response.status === 400) {
      alert(err.response.data.message);
    }
  }
};
