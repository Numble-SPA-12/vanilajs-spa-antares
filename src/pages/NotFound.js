const NotFound = () => {
  const $main = document.createElement("main");
  $main.classList.add(["flex", "flex-col", "justify-start"]);

  $main.innerHTML = `
    <h2>404</h2>  
  `;

  return $main;
};

export default NotFound;
