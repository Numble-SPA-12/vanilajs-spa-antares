"use strict";

const Home = () => {
  const $main = document.createElement("main");
  $main.classList.add(["flex", "flex-col", "justify-start"]);

  $main.innerHTML = `
    <app-header type="main"></app-header>
    <h2>Home</h2>  
  `;

  return $main;
};

export default Home;
