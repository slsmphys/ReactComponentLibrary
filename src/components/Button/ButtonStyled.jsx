import styled from "styled-components";

import theme from "./theme";

const ButtonStyled = styled.button`
    font-family: ${theme.fontFamily};
    font-weight: ${theme.fontWeight};
    font-size: ${theme.fontSize};
    min-width: 12.5rem;
    margin-left: ${(props) => theme[props.buttonType].leftMargin};
    margin-right: ${(props) => theme[props.buttonType].rightMargin};
    padding: ${(props) => theme[props.buttonType].padding};
    border-width: ${(props) => theme[props.buttonType].borderWidth};
    border-style: ${(props) => theme[props.buttonType].borderStyle};
    border-color: ${(props) =>
        theme[props.buttonType].borderColor[props.styledAs]};
    border-radius: ${theme.borderRadius};
    background-color: ${(props) =>
        theme[props.buttonType].bgColor[props.styledAs]};
    color: ${(props) => theme[props.buttonType].color[props.styledAs]};
    line-height: 1;
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: ${(props) =>
            theme[props.buttonType].bgHoverColor[props.styledAs]};
        border-color: ${(props) =>
            theme[props.buttonType].borderHoverColor[props.styledAs]};
        color: ${(props) => theme[props.buttonType].colorHover[props.styledAs]};
    }

    &:disabled {
        opacity: 0.75;
        background-color: ${theme.disabled.bgColor};
        border-color: ${theme.disabled.borderColor};
        color: ${theme.disabled.color};
        cursor: not-allowed;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0.1rem 1.5rem 0.4rem rgba(100, 112, 225, 0.85);
    }
`;

export default ButtonStyled;
