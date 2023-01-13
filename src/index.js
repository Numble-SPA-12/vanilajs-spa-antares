import "./styles/input.css";

import { Header } from "./components";
import router from "router";

customElements.define("app-header", Header);

// register escape function for String
// This is to prevent XSS attack
String.prototype.escape = function () {
  var tagsToReplace = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
  };
  return this.replace(/[&<>]/g, function (tag) {
    return tagsToReplace[tag] || tag;
  });
};

router.init();
