import React, {Fragment} from "react";
import ReactDOM from "react-dom";

import previews from "./previews/previews";

const App = () => (
	<Fragment>
		{previews.buttonDemo}
	</Fragment>);

ReactDOM.render(<App />, document.getElementById("root"));
