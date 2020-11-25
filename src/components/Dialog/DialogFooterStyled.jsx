import styled from "styled-components";

import theme from "./theme";

const DialogFooterStyled = styled.footer`
    display: flex;

    border-top-width: ${theme.footerBorderTopWidth};
    border-top-style: ${theme.footerBorderTopStyle};
    border-top-color: ${theme.footerBorderTopColor};
    border-bottom-left-radius: ${theme.borderRadius};
    border-bottom-right-radius: ${theme.borderRadius};
    background-color: ${theme.backgroundColor};
    justify-content: center;
    padding: 2rem;
    width: 100%
`;

export default DialogFooterStyled;