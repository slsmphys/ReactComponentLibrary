import React from "react";
import PropTypes from "prop-types";

import PanelContentStyled from "./PanelContentStyled";

const PanelContent = ({ panelContent }) => (
    <PanelContentStyled>
        {panelContent}    
    </PanelContentStyled>
);

PanelContent.defaultProps = {

};

PanelContent.propTypes = {
    panelContent: PropTypes.func.isRequired,
}

export default PanelContent;
