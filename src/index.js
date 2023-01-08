import "./styles/input.css";

import { initializeRouter } from "./router";

import { Header } from "./components";

customElements.define("app-header", Header);

initializeRouter();
