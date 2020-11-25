import styled from "styled-components";

import theme from "./theme";

const DialogStyled = styled.div`
    position: relative;
    border-width: ${theme.borderWidth};
    border-style: ${theme.borderStyle};
    border-color: ${theme.borderColor};
    border-radius: ${theme.borderRadius};

    .dialog-close-btn {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        z-index: 1000;
    }
`;

export default DialogStyled;
