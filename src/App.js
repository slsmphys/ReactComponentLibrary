import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import {
    iconWithTextDemo,
    inlineNotificationDemo,
    buttonDemo,
    newButtonDemo,
} from "./js/demos";

const App = buttonDemo;

ReactDOM.render(<App />, document.getElementById("root"));
