const Home = () => {
  const $main = document.createElement("main");
  $main.classList.add(["flex", "flex-col", "justify-start"]);

  $main.innerHTML = `
    <h2>Home</h2>  
  `;

  return $main;
};

export default Home;
