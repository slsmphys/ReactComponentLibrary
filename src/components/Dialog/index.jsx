import React from "react";
import PropTypes from "prop-types";

import IconButton from "../IconButton";

import DialogStyled from "./DialogStyled";
import DialogContent from "./DialogContent";
import DialogFooter from "./DialogFooter";

const Dialog = ({
    className,
    closable,
    title,
    subtitle,
    alignButtons,
    buttons,
}) => (
    <DialogStyled className={className}>
        {closable && (
            <IconButton
                className="dialog-close-btn"
                icon="close"
                appearance="text"
                styledAs="system"
                size="small"
            />
        )}
        <DialogContent
            className={className}
            title={title}
            subtitle={subtitle}
        />
        <DialogFooter
            className={className}
            alignButtons={alignButtons}
            buttons={buttons}
        />
    </DialogStyled>
);

Dialog.defaultProps = {
    className: "dialog",
    closable: true,
    subtitle: null,
    alignButtons: "center",
};

Dialog.propTypes = {
    className: PropTypes.string,
    closable: PropTypes.bool,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    alignButtons: PropTypes.oneOf(["left", "center", "right"]),
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            styledAs: PropTypes.oneOf(["solid", "outline"]),
            contextType: PropTypes.oneOf([
                "positive",
                "negative",
                "info",
                "system",
            ]),
            text: PropTypes.string,
            isDisabled: PropTypes.bool,
            onClick: PropTypes.func.isRequired,
        })
    ),
};

export default Dialog;
