import React from "react";

import Dialog from "../components/Dialog";

const DialogDemo = () => {
    const buttons = [
        {
            text: "No",
            contextType: "negative",
            onClick: () => alert("Clicked No"),
        },
        {
            text: "Yes",
            contextType: "positive",
            onClick: () => alert("Clicked Yes"),
        },
    ];

    return (
        <div className="medium-component-wrapper">
            <Dialog
                className="dialog-demo"
                title="Save file?"
                subtitle="Should I save the file"
                alignButtons="right"
                closable={true}
                buttons={buttons}
            />
        </div>
    );
};

export default DialogDemo;
