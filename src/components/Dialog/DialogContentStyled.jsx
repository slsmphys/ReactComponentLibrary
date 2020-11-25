import styled from "styled-components";

import theme from "./theme";

const DialogContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    text-align: center;

    h1 {
        font-family: ${theme.titleFontFamily};
        font-size: ${theme.titleFontSize};
        font-weight: ${theme.titleFontWeight};
        color: ${theme.titleColor};
        margin-top: 0;
        margin-bottom: 1.4rem;
    }

    h2 {
        font-family: ${theme.subtitleFontFamily};
        font-size: ${theme.subtitleFontSize};
        color: ${theme.subtitleColor};
        margin-top: 0;
        margin-bottom: 1.4rem;
    }
`;

export default DialogContent;
