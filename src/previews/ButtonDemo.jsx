import React from "react";

import Button from "../components/Button";

const ButtonDemo = (
    <div>
      <h1>Buttons Demo</h1>
      <h2>Solid Buttons</h2>
      <Button
          text="Success"
          contextType="positive"
          onClick={() => alert("Clicked")}
      />
      <Button
          text="Failure"
          contextType="negative"
          onClick={() => alert("Clicked")}
      />
      <Button
          text="More"
          contextType="info"
          onClick={() => alert("Clicked")}
      />
      <Button
          text="System"
          contextType="system"
          onClick={() => alert("Clicked")}
      />
      <Button
          text="Disabled"
          contextType="positive"
          onClick={() => alert("Clicked")}
          isDisabled={true}
      />
      <Button
          text="Rounded"
          contextType="positive"
          onClick={() => alert("Clicked")}
          hasRoundedCorners={true}
      />
      <h2>Outlined Buttons</h2>
      <Button
          text="Success"
          styledAs="outlined"
          contextType="positive"
          onClick={() => alert("Clicked")}
      />
      <Button
          text="Failure"
          styledAs="outlined"
          contextType="negative"
          onClick={() => alert("Clicked")}
      />
      <Button
          text="More"
          styledAs="outlined"
          contextType="info"
          onClick={() => alert("Clicked")}
      />
      <Button
          text="System"
          styledAs="outlined"
          contextType="system"
          onClick={() => alert("Clicked")}
      />
      <Button
          text="Disabled"
          styledAs="outlined"
          contextType="positive"
          onClick={() => alert("Clicked")}
          isDisabled={true}
      />
      <Button
          text="Rounded"
          styledAs="outlined"
          contextType="positive"
          onClick={() => alert("Clicked")}
          hasRoundedCorners={true}
      />
      <h2>Text Buttons</h2>
      <Button
          text="Success"
          styledAs="text"
          contextType="positive"
          onClick={() => alert("Clicked")}
      />
      <Button
          text="Failure"
          styledAs="text"
          contextType="negative"
          onClick={() => alert("Clicked")}
      />
      <Button
          text="More"
          styledAs="text"
          contextType="info"
          onClick={() => alert("Clicked")}
      />
      <Button
          text="System"
          styledAs="text"
          contextType="system"
          onClick={() => alert("Clicked")}
      />
      <Button
          text="Disabled"
          styledAs="text"
          contextType="positive"
          onClick={() => alert("Clicked")}
          isDisabled={true}
      />
      <Button
          text="Rounded"
          styledAs="text"
          contextType="positive"
          onClick={() => alert("Clicked")}
          hasRoundedCorners={true}
      />
  </div>
);

export default ButtonDemo;