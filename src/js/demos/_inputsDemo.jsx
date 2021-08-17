import React, { Fragment, useState } from "react";

import Input from "../components/Input";

const App = () => {
    const [inputValue, setInputValue ] = useState("");

    const handleUpdate = e => {
        setInputValue(e.target.value);
    }

    return (
        <Fragment>
            <h1>Inputs Demo</h1>
            <div className="component-wrapper">
                <Input styledAs="normal" value={inputValue} onChange={e => handleUpdate(e)}/>
            </div>
            <div className="component-wrapper">
                <Input styledAs="valid" />
            </div>
            <div className="component-wrapper">
                <Input styledAs="invalid" />
            </div>
            <div className="component-wrapper">
                <Input isDisabled />
            </div>
        </Fragment>
    );
};

export default App;