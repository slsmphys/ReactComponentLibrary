import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";

import ActionButtonStyled from "./ActionButtonStyled";

const ActionButton = ({
    className,
    text,
    icon,
    buttonStyle,
    styledAs,
    size,
    iconPosition,
    onClick,
}) => (
    <ActionButtonStyled>
        {iconPosition === "left" && <Icon icon={icon} size={size} />}
        <span>{text}</span>
        {iconPosition === "right" && <Icon icon={icon} size={size} />}
    </ActionButtonStyled>
);

ActionButton.defaultProps = {
    className: "action-button",
    text: "Button",
    icon: "close",
    buttonStyle: "solid",
    styledAs: "information",
    size: "medium",
    iconPosition: "left",
    onClick: () => null,
};

ActionButton.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.string,
    buttonStyle: PropTypes.oneOf(["solid", "outline", "text"]),
    styledAs: PropTypes.oneOf([
        "positive",
        "negative",
        "information",
        "system",
    ]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    iconPosition: PropTypes.oneOf(["left", "right"]),
    onClick: PropTypes.func,
};

export default ActionButton;
