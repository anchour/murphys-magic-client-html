import "./style.scss";
import { render } from "preact";
import { App } from "./src/scripts/components/App.jsx";

render(<App />, document.querySelector("#app"));
