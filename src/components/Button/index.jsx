import React from "react";
import PropTypes from "prop-types";

import ButtonStyled from "./ButtonStyled";

const Button = ({
    className,
    buttonType,
    styledAs,
    text,
    isDisabled,
    onClick,
}) => {
    const handleClick = () => onClick();

    return (
        <ButtonStyled
            className={className}
            buttonType={buttonType}
            styledAs={styledAs}
            onClick={handleClick}
            disabled={isDisabled}
        >
            {text}
        </ButtonStyled>
    );
};

Button.defaultProps = {
    className: "button",
    type: "button",
    buttonType: "solid",
    styledAs: "information",
    text: "button",
    isDisabled: false,
    onClick: () => null,
};

Button.propsTypes = {
    className: PropTypes.string,
    buttonType: PropTypes.oneOf(["solid", "outline", "text"]),
    styledAs: PropTypes.oneOf([
        "positive",
        "negative",
        "information",
        "system",
    ]),
    text: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;
