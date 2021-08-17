import styled from "styled-components";

import theme from "./theme";

const ButtonStyled = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: ${theme.fontFamily};
    font-size: ${(props) => theme.fontSize[props.size]};
    font-weight: ${theme.fontWeight};
    min-width: ${(props) => theme.buttonWidth[props.size]};
    height: ${(props) => theme.buttonHeight[props.size]};
    border-radius: ${theme.borderRadius};
    border-width: ${theme.borderWidth};
    border-style: ${theme.borderStyle};
    border-color: ${(props) =>
        theme.borderColor[props.variant][props.styledAs]};
    background-color: ${(props) =>
        theme.backgroundColor[props.variant][props.styledAs]};
    color: ${(props) => theme.labelColor[props.variant][props.styledAs]};

    margin: ${theme.margin};
    padding: ${(props) => theme.padding[props.size]};

    line-height: 1;
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: ${(props) =>
            theme.backgroundColorHover[props.variant][props.styledAs]};
        border-color: ${(props) =>
            theme.borderColorHover[props.variant][props.styledAs]};
        color: ${(props) =>
            theme.labelColorHover[props.variant][props.styledAs]};
    }

    &:active {
        background-color: ${(props) =>
            theme.backgroundColorActive[props.variant][props.styledAs]};
        border-color: ${(props) =>
            theme.borderColorActive[props.variant][props.styledAs]};
        color: ${(props) =>
            theme.labelColorActive[props.variant][props.styledAs]};
    }

    ${"" /* font-family: ${theme.fontFamily};
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
    } */}

    &:disabled {
        opacity: 0.75;
        background-color: ${theme.disabled.bgColor};
        border-color: ${theme.disabled.borderColor};
        color: ${theme.disabled.color};
        cursor: not-allowed;
    }

    &:focus {
        outline: none;
        ${"" /* box-shadow: 0 0.1rem 1.5rem 0.4rem rgba(100, 112, 225, 0.85); */}
        box-shadow: 0 0 0 0.4rem #02b3e4;
    }
`;

export default ButtonStyled;
