import styled, { css } from "styled-components";

import theme from "./theme";

const ButtonStyled = styled.button`
  min-width: 12.5rem;
  margin-left: ${(props) => theme[props.styledAs].leftMargin};
  margin-right: ${(props) => theme[props.styledAs].rightMargin};
  padding: ${(props) => theme[props.styledAs].padding};
  border-width: ${(props) => theme[props.styledAs].borderWidth};
  border-style: ${(props) => theme[props.styledAs].borderStyle};
  border-color: ${(props) => theme.solid.bgColor[props.contextType]};
  background-color: ${(props) => theme.solid.bgColor[props.contextType]};
  color: ${(props) => theme.solid.color[props.contextType]};
  line-height: 1;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => theme.solid.bgHoverColor[props.contextType]};
    border-color: ${(props) =>
      theme[props.styledAs].borderHoverColor[props.contextType]};
  }

  ${(props) =>
    props.hasRoundedCorners &&
    css`
      border-radius: ${theme.borderRadius};
    `};
`;

export default ButtonStyled;
