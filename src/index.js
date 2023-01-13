import "./styles/input.css";

import { Header } from "./components";
import router from "router";

customElements.define("app-header", Header);

router.init();
