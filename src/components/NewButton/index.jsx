import React from "react";
import PropTypes from "prop-types";

import NewButtonStyled from "./NewButtonStyled";

const NewButton = ({
    className,
    buttonType,
    icon,
    iconPosition,
    size,
    styledAs,
    text,
    onClick,
}) => {
    const handleOnClick = () => onClick();

    return (
        <NewButtonStyled
            className={className}
            buttonType={buttonType}
            size={size}
            styledAs={styledAs}
            onClick={() => handleOnClick()}
        >
            {icon && iconPosition === "left" && <h2>Icon</h2>}
            <span>{text}</span>
            {icon && iconPosition === "right" && <h2>Icon</h2>}
        </NewButtonStyled>
    );
};

NewButton.defaultProps = {
    className: "button",
    buttonType: "primary",
    icon: null,
    iconPosition: "left",
    size: "medium",
    styledAs: "inform",
};

NewButton.propTypes = {
    className: PropTypes.string,
    buttonType: PropTypes.oneOf(["primary", "secondary", "text"]),
    icon: PropTypes.string,
    iconPosition: PropTypes.oneOf(["left", "right"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    styledAs: PropTypes.oneOf(["accept", "reject", "inform", "system"]),
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default NewButton;
