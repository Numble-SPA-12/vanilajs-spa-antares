import "./styles/input.css";

import { Header, PostPreview } from "./components";
import router from "router";

customElements.define("app-header", Header);
customElements.define("post-preview", PostPreview);

router.init();
