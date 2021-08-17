import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";

import IconWithTextStyled from "./IconWithTextStyled";

const IconWithText = ({ className, icon, size, text }) => (
    <IconWithTextStyled className={className} size={size}>
        <Icon className={`${className}__Icon`} icon={icon} />
        <span>{text}</span>
    </IconWithTextStyled>
);

IconWithText.defaultProps = {
    className: "icon-with-text",
    size: "medium",
};

IconWithText.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    text: PropTypes.string.isRequired,
};

export default IconWithText;
