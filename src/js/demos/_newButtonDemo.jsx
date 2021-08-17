import React from "react";

import NewButton from "../../components/NewButton";

const newButtonDemo = () => (
    <NewButton
        text="test"
        onClick={() => alert("test")}
        icon="A"
        iconPosition="right"
    />
);

export default newButtonDemo;
