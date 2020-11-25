import React from "react";
import PropTypes from "prop-types";

import IconStyled from "./IconStyled";

const Icon = ({ className, icon, size }) => (
    <IconStyled
        className={className}
        icon={icon}
        size={size}
        aria-hidden="true"
    />
);

Icon.defaultProps = {
    className: "icon",
    size: "medium",
};

Icon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Icon;
