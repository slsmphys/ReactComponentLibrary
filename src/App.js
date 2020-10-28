import React from "react";
import ReactDOM from "react-dom";

import Button from "./components/Button";

const App = () => (
  <Button
    text="Hello there!"
    contextType="negative"
    onClick={() => alert("Clicked")}
  />
);

ReactDOM.render(<App />, document.getElementById("root"));
