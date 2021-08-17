import React from "react";

import InlineNotification from "../../components/InlineNotification";

const inlineNotificationDemo = () => (
    <div>
        <InlineNotification
            icon="close"
            text="Inline Notification"
            styledAs="success"
            size="small"
        />
        <InlineNotification
            icon="close"
            text="Inline Notification"
            styledAs="failure"
            size="medium"
        />
        <InlineNotification
            icon="close"
            text="Inline Notification"
            styledAs="warning"
            size="large"
        />
    </div>
);

export default inlineNotificationDemo;
