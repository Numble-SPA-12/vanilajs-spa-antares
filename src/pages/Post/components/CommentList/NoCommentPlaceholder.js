const NoCommentPlaceholder = () => {
  const $component = document.createElement("p");
  $component.classList.add("text-center", "text-gray-500", "my-6");
  $component.textContent = "No comments yet";

  return $component;
};

export default NoCommentPlaceholder;
