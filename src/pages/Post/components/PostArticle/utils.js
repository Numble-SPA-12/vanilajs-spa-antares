import { deletePost } from "common/apis/PostsAPI";
import Links from "common/constants/Links";
import router from "common/router";

export const getEditButtonClickHandler = (setState) => (e) => {
  setState((prevState) => ({
    ...prevState,
    mode: "edit",
  }));
};

export const getDeleteButtonEventHandler = (postId) => async (e) => {
  if (!confirm("정말로 삭제하시겠어요?")) return;

  try {
    const response = await deletePost(postId);
    if (response.code === 200) {
      router.push(Links.Home);
    }
  } catch (err) {
    console.error(err);
    if (err.response.status === 400) {
      alert(err.response.data.message);
    }
    return;
  }
};
