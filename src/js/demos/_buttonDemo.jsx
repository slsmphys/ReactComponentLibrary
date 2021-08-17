import React from "react";

import Button from "../../components/Button";

const ButtonDemo = () => (
    <div>
        <h1>Buttons Demo</h1>
        <h2>Primary Buttons</h2>
        <Button
            text="Accept"
            styledAs="accept"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="Reject"
            styledAs="reject"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="Inform"
            styledAs="inform"
            onClick={() => alert("Clicked")}
        />
        <Button text="Warn" styledAs="warn" onClick={() => alert("Clicked")} />
        <Button
            text="Default"
            styledAs="default"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="Disabled"
            styledAs="positive"
            onClick={() => alert("Clicked")}
            isDisabled={true}
        />

        <h2>Secondary Buttons</h2>
        <Button
            text="Accept"
            variant="secondary"
            styledAs="accept"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="Reject"
            variant="secondary"
            styledAs="reject"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="Inform"
            variant="secondary"
            styledAs="inform"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="Warn"
            variant="secondary"
            styledAs="warn"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="Default"
            variant="secondary"
            styledAs="default"
            onClick={() => alert("Clicked")}
        />
        <Button
            text="Disabled"
            variant="secondary"
            styledAs="accept"
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
