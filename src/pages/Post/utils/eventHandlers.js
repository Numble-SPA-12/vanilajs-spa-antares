import router from "common/router";

export const headerClickHandler = (e) => {
  const $target = e.target.closest("button");
  if ($target && $target.id === "back-button") {
    router.back();
  }
};
