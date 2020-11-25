import styled from "styled-components";

import theme from "./theme";

const IconButtonStyled = styled.button`
    margin-left: ${theme.leftMargin};
    margin-right: ${theme.rightMargin};
    padding: ${(props) => theme.padding.size[props.size]};

    border-width: ${theme.borderWidth};
    border-style: ${theme.borderStyle};
    border-radius: ${theme.borderRadius};

    border-color: ${(props) =>
        theme[props.appearance].styledAs[props.styledAs].borderColor};
    background-color: ${(props) =>
        theme[props.appearance].styledAs[props.styledAs].bgColor};
    color: ${(props) => theme[props.appearance].styledAs[props.styledAs].color};

    line-height: 1;

    ${(props) =>
        props.shape === "round" &&
        css`
            border-radius: 100%;
        `};

    &:hover {
        background-color: ${(props) =>
            theme[props.appearance].styledAs[props.styledAs].bgHoverColor};
        border-color: ${(props) =>
            theme[props.appearance].styledAs[props.styledAs].borderHoverColor};
        color: ${(props) =>
            theme[props.appearance].styledAs[props.styledAs].colorHover};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0.1rem 1.5rem 0.4rem rgba(100, 112, 225, 0.85);
    }

    :disabled {
        opacity: 0.75;
        background-color: ${theme.disabled.bgColor};
        border-color: ${theme.disabled.borderColor};
        color: ${theme.disabled.color};
        cursor: not-allowed;
    }
`;

export default IconButtonStyled;
