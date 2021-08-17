import React from "react";
import PropTypes from "prop-types";

import PanelHeaderStyled from "./PanelHeaderStyled"

const PanelHeader = ({ title, subtitle }) => (<PanelHeaderStyled>
    <h2>{title}</h2>
    {subtitle && <h3>{subtitle}</h3>}
</PanelHeaderStyled>);

PanelHeader.defaultProps = {
    subTitle: null,
};

PanelHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

export default PanelHeader;
