import styled, { css } from "styled-components";

import theme from "./theme";

const ButtonStyled = styled.button`
  font-family: ${theme.fontFamily};
  font-weight: ${theme.fontWeight};
  font-size: ${theme.fontSize};
  min-width: 12.5rem;
  margin-left: ${(props) => theme[props.styledAs].leftMargin};
  margin-right: ${(props) => theme[props.styledAs].rightMargin};
  padding: ${(props) => theme[props.styledAs].padding};
  border-width: ${(props) => theme[props.styledAs].borderWidth};
  border-style: ${(props) => theme[props.styledAs].borderStyle};
  border-color: ${(props) => theme[props.styledAs].borderColor[props.contextType]};
  background-color: ${(props) => theme[props.styledAs].bgColor[props.contextType]};
  color: ${(props) => theme[props.styledAs].color[props.contextType]};
  line-height: 1;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => theme[props.styledAs].bgHoverColor[props.contextType]};
    border-color: ${(props) =>
      theme[props.styledAs].borderHoverColor[props.contextType]};
    color: ${(props) => theme[props.styledAs].colorHover[props.contextType]};
  }

  ${(props) =>
    props.hasRoundedCorners &&
    css`
      border-radius: ${theme.borderRadius};
    `};

    &:disabled {
      opacity: 0.75;
      background-color: ${theme.disabled.bgColor};
      border-color: ${theme.disabled.borderColor};
      color: ${theme.disabled.color};
      cursor: not-allowed;
    };

    &:focus {
      outline: none;
      box-shadow: 0 0 0 .4rem rgba(21, 156, 255, 0.5)
    }
`;

export default ButtonStyled;
