import React from "react";
import PropTypes from "prop-types";

import { getIcon } from "../../js/utilities";

const Icon = ({ className, icon }) => {
    const SelectedIcon = getIcon(icon);

    return <SelectedIcon className={className} aria-hidden="true" />;
};

Icon.defaultProps = {
    className: "icon",
    size: "medium",
};

Icon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
};

export default Icon;
