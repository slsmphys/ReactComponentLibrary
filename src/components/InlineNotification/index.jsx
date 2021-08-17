import React from "react";
import PropTypes from "prop-types";

import IconWithText from "../IconWithText";

import InlineNotificationStyled from "./InlineNotificationStyled";

const InlineNotification = ({ className, text, size, styledAs }) => {
    const icons = {
        success: "systemCheckOutline",
        failure: "systemCrossOutline",
        warning: "systemAlert",
    };

    const icon = icons[styledAs];

    return (
        <InlineNotificationStyled
            className={className}
            styledAs={styledAs}
            size={size}
        >
            <IconWithText
                className={`${className}-icon-with-text`}
                icon={icon}
                text={text}
                size={size}
            />
        </InlineNotificationStyled>
    );
};

InlineNotification.defaultProps = {
    className: "inline-notification",
    size: "medium",
};

InlineNotification.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    styledAs: PropTypes.oneOf(["success", "failure", "warning"]).isRequired,
};

export default InlineNotification;
