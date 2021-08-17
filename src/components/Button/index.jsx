import React from "react";
import PropTypes from "prop-types";

import ButtonStyled from "./ButtonStyled";

const Button = ({
    className,
    ariaLabel,
    type,
    variant,
    styledAs,
    size,
    text,
    icon,
    iconPosition,
    isDisabled,
    onClick,
}) => {
    const handleClick = () => onClick();

    return (
        <ButtonStyled
            className={className}
            aria-label={ariaLabel}
            type={type}
            variant={variant}
            styledAs={styledAs}
            size={size}
            disabled={isDisabled}
            onClick={handleClick}
        >
            {icon && iconPosition === "left" && <h1>Icon</h1>}
            {text}
            {icon && iconPosition === "right" && <h1>Icon</h1>}
        </ButtonStyled>
    );
};

Button.defaultProps = {
    className: "button",
    ariaLabel: null,
    type: "button",
    variant: "primary",
    styledAs: "accept",
    size: "medium",
    text: "button",
    icon: "",
    iconPosition: "left",
    isDisabled: false,
    onClick: () => null,
};

Button.propsTypes = {
    className: PropTypes.string,
    ariaLabel: PropTypes.string,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    variant: PropTypes.oneOf(["primary", "secondary", "text"]),
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    iconPosition: PropTypes.oneOf(["left", "right"]),
    styledAs: PropTypes.oneOf([
        "default",
        "accept",
        "reject",
        "inform",
        "warn",
    ]),
    size: PropTypes.oneOf(["xsmall", "small", "medium", "large"]),
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;
