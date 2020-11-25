import React from "react";

import Button from "../components/Button";

const ButtonDemo = () => (
    <div>
        <h1>Buttons Demo</h1>
        <h2>Solid Buttons</h2>
        <Button
            text="Success"
            styledAs="positive"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="Failure"
            styledAs="negative"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="More"
            styledAs="information"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="System"
            styledAs="system"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="Disabled"
            styledAs="positive"
            onClick={() => alert("Clicked")}
            isDisabled={true}
        />

        <h2>Outlined Buttons</h2>
        <Button
            text="Success"
            buttonType="outlined"
            styledAs="positive"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="Failure"
            buttonType="outlined"
            styledAs="negative"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="More"
            buttonType="outlined"
            styledAs="information"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="System"
            buttonType="outlined"
            styledAs="system"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="Disabled"
            buttonType="outlined"
            styledAs="positive"
            onClick={() => alert("Clicked")}
            isDisabled={true}
        />

        <h2>Text Buttons</h2>
        <Button
            text="Success"
            buttonType="text"
            styledAs="positive"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="Failure"
            buttonType="text"
            styledAs="negative"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="More"
            buttonType="text"
            styledAs="information"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="System"
            buttonType="text"
            styledAs="system"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="Disabled"
            buttonType="text"
            styledAs="positive"
            onClick={() => alert("Clicked")}
            isDisabled={true}
        />
    </div>
);

export default ButtonDemo;
