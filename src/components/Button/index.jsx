import React from "react";
import PropTypes from "prop-types";

import ButtonStyled from "./ButtonStyled";

const Button = ({
  className,
  type,
  styledAs,
  contextType,
  text,
  hasRoundedCorners,
  isDisabled,
  onClick,
}) => {
  const handleClick = () => onClick();

  return (
    <ButtonStyled
      className={className}
      type={type}
      styledAs={styledAs}
      contextType={contextType}
      hasRoundedCorners={hasRoundedCorners}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {text}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  className: "",
  type: "button",
  styledAs: "solid",
  contextType: "info",
  text: "",
  hasRoundedCorners: false,
  isDisabled: false,
  onClick: () => null,
};

Button.propsTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  styledAs: PropTypes.oneOf(["solid", "outline", "icon"]),
  contextType: PropTypes.oneOf(["positive", "negative", "info", "system"]),
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  hasRoundedCorners: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
