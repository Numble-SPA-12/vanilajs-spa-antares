import "./styles/output.css";

import { initializeRouter } from "./router/router.js";

import Header from "./components/header.js";

customElements.define("app-header", Header);

initializeRouter();
