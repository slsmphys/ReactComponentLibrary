import React from "react";
import PropTypes from "prop-types";

import DialogContentStyled from "./DialogContentStyled";

const DialogContent = ({ className, title, subtitle }) => (
    <DialogContentStyled className={`${className}__content`}>
        <h1>{title}</h1>
        {subtitle && (
            <h2>{subtitle}</h2>
        )}
    </DialogContentStyled>
)

DialogContent.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
};

export default DialogContent;