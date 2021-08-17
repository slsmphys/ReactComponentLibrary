import React from "react";

import IconButton from "../components/IconButton";

const IconButtonDemo = () => (
    <div>
        <IconButton
            icon="close"
            styledAs="positive"
            appearance="outline"
            disabled={false}
            onClick={() => alert("Hello")}
        />

        <IconButton
            icon="close"
            styledAs="negative"
            appearance="outline"
            disabled={false}
            onClick={() => alert("Hello")}
        />

        <IconButton
            icon="close"
            styledAs="information"
            appearance="outline"
            disabled={false}
            onClick={() => alert("Hello")}
        />

        <IconButton
            icon="close"
            styledAs="system"
            appearance="outline"
            disabled={false}
            onClick={() => alert("Hello")}
        />

        <IconButton
            icon="close"
            styledAs="system"
            appearance="outline"
            disabled
            onClick={() => alert("Hello")}
        />
        <br />
        <IconButton
            icon="close"
            styledAs="positive"
            appearance="solid"
            disabled={false}
            onClick={() => alert("Hello")}
        />

        <IconButton
            icon="close"
            styledAs="negative"
            appearance="solid"
            disabled={false}
            onClick={() => alert("Hello")}
        />

        <IconButton
            icon="close"
            styledAs="information"
            appearance="solid"
            disabled={false}
            onClick={() => alert("Hello")}
        />

        <IconButton
            icon="close"
            styledAs="system"
            appearance="solid"
            disabled={false}
            onClick={() => alert("Hello")}
        />

        <IconButton
            icon="close"
            styledAs="system"
            appearance="solid"
            disabled
            onClick={() => alert("Hello")}
        />
        <br />
        <IconButton
            icon="close"
            styledAs="positive"
            appearance="text"
            disabled={false}
            onClick={() => alert("Hello")}
        />

        <IconButton
            icon="close"
            styledAs="negative"
            appearance="text"
            disabled={false}
            onClick={() => alert("Hello")}
        />

        <IconButton
            icon="close"
            styledAs="information"
            appearance="text"
            disabled={false}
            onClick={() => alert("Hello")}
        />

        <IconButton
            icon="close"
            styledAs="system"
            appearance="text"
            disabled={false}
            onClick={() => alert("Hello")}
        />

        <IconButton
            icon="close"
            styledAs="system"
            appearance="text"
            disabled
            onClick={() => alert("Hello")}
        />
    </div>
);

export default IconButtonDemo;
