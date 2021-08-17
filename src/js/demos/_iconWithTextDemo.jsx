import React from "react";

import IconWithText from "../../components/IconWithText";

const iconWithTextDemo = () => (
    <div>
        <h4>Small</h4>
        <IconWithText icon="close" text="Small icon with text" size="small" />
        <h4>Medium</h4>
        <IconWithText icon="close" text="Medium icon with text" />
        <h4>Large</h4>
        <IconWithText icon="close" text="Large icon with text" size="large" />
    </div>
);

export default iconWithTextDemo;
