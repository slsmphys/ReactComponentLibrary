import React from "react";
import PropTypes from "prop-types";

import PanelStyled from "./PanelStyled";
import PanelHeader from "./PanelHeader";
import PanelContent from "./PanelContent";

const Panel = ({ className, title, subtitle, includeHeader, includeFooter, footerContent }) => (
    <PanelStyled className={className}>
        <PanelHeader
            title={title}
            subtitle={subtitle}
        />
        {/* <PanelContent/> */}
        {/* <PanelFooter/> */}
    </PanelStyled>
);

Panel.defaultProps = {
    className: "",
    title: "title",
    subtitle: null,
    includeHeader: true,
    includeFooter: true,
    footerContent: () => null,
};

Panel.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    includeHeader: PropTypes.bool,
    includeFooter: PropTypes.bool,
    footerContent: PropTypes.func,
};

export default Panel;