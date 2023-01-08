import "./styles/input.css";

import { initializeRouter } from "./router/router";

import Header from "./components/header";

customElements.define("app-header", Header);

initializeRouter();
