import React from "react";
import PropTypes from "prop-types";

import InputStyled from "./InputStyled";

const Input = ({ className, type, styledAs, placeholder, value, isDisabled, onChange, onBlur }) => {
    const handleOnChange = e => {
        if (onChange) onChange(e);
    };

    const handleOnBlur = e => {
        if (onBlur) onBlur(e);
    };

    return (
        <InputStyled 
            type={type}
            className={className}
            placeholder={placeholder}
            styledAs={styledAs}
            value={value}
            disabled={isDisabled}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
        />
    );
}

Input.defaultProps = {
    className: "",
    type: "text",
    styledAs: "normal",
    placeholder: "Placeholder",
    value: "",
    isDisabled: false,
    onChange: () => null,
    onBlur: () => null,    
};

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(["text", "password", "email", "telephone"]),
    styledAs: PropTypes.oneOf(["normal", "valid", "invalid"]),
    placeholder: PropTypes.string,
    value: PropTypes.string,
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
};

export default Input;
