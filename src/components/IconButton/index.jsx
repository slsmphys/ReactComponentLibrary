import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";

import IconButtonStyled from "./IconButtonStyled";

const IconButton = ({
    className,
    size,
    styledAs,
    appearance,
    shape,
    icon,
    disabled,
    onClick,
}) => {
    const handleClick = () => {
        console.log("click");
        if (onClick) {
            onClick();
        }
    };

    return (
        <IconButtonStyled
            appearance={appearance}
            className={className}
            size={size}
            shape={shape}
            styledAs={styledAs}
            disabled={disabled}
            onClick={handleClick}
        >
            <Icon className={`${className}__icon`} icon={icon} size={size} />
        </IconButtonStyled>
    );
};

IconButton.defaultProps = {
    className: "icon-button",
    size: "medium",
    styledAs: "information",
    disabled: false,
    appearance: "solid",
    shape: "square",
    onClick: () => null,
};

IconButton.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    styledAs: PropTypes.oneOf([
        "positive",
        "negative",
        "information",
        "system",
    ]),
    disabled: PropTypes.bool,
    appearance: PropTypes.oneOf(["solid", "outline", "text"]),
    onClick: PropTypes.func,
    shape: PropTypes.oneOf(["square", "round"]),
};

export default IconButton;
