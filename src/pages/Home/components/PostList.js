import PostPreview from "./PostPreview";
import Links from "common/constants/Links";
import handleNewTabOpen from "common/utils/handleNewTabOpen";

const postClickHandler = (e) => {
  const $target = e.target.closest("article");
  if ($target) {
    const id = $target.dataset.postId;
    handleNewTabOpen(Links.Post(id), e);
  }
};

const PostList = (posts) => {
  const $list = document.createElement("ul");
  $list.id = "newyear-post__list";
  $list.classList.add("flex", "flex-col", "gap-4");

  const postPreviews = posts.map((post) => PostPreview(post));
  $list.append(...postPreviews);

  $list.addEventListener("click", postClickHandler);
  $list.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      postClickHandler(e);
    }
  });

  return $list;
};

const PostListSkeleton = () => {
  const $list = document.createElement("ul");
  $list.id = "newyear-post__list";
  $list.classList.add("flex", "flex-col", "gap-4");

  Array.from({ length: 3 }).forEach((_, i) =>
    $list.append(PostPreview.Loading())
  );

  return $list;
};

PostList.Loading = PostListSkeleton;

export default PostList;
