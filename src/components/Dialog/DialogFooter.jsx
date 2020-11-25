import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";

import DialogFooterStyled from "./DialogFooterStyled";

const DialogFooter = ({
    alignButtons,
    className,
    buttons
}) => {
    const getFooterButtons = buttons.map(button => (
            <Button key={`dialog-btn-${button.text}`} {...button}/>
        ));

    return (
        <DialogFooterStyled className={`${className}__footer`} alignButtons={alignButtons}>
            {getFooterButtons}
        </DialogFooterStyled>
    )
};

DialogFooter.propTypes = {
    alignButtons: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default DialogFooter;