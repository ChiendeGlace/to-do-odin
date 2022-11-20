import "./scss/main.scss";
import { makeSidebar } from "./sidebar";
import { makeHomepage } from "./homepage";

const section = document.querySelector('section');
section.appendChild(makeSidebar());
section.appendChild(makeHomepage());
