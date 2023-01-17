import handleNewTabOpen from "common/utils/handleNewTabOpen";

const Link = (props) => {
  const { href, label, className } = props;

  const $link = document.createElement("a");

  $link.href = href;
  $link.className = className;
  $link.textContent = label;

  $link.addEventListener("click", (e) => {
    e.preventDefault();
    handleNewTabOpen(href, e);
  });

  return $link;
};

export default Link;
