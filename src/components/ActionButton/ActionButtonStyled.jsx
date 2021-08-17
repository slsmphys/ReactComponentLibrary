import styled from "styled-components";

import theme from "./theme";

const ActionButtonStyled = styled.button`
    display: flex;

    span {
        font-family: ${theme.fontFamily};
        font-size: $theme.fontSize.desktop.textRegular;
        line-height: 1;
    }
`;

export default ActionButtonStyled;
