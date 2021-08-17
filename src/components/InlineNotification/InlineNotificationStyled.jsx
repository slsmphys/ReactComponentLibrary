import styled from "styled-components";

import { breakpoints } from "../../js/setup";

import theme from "./theme";

const InlineNotificationStyled = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: ${(props) => theme.padding.mobile[props.size]};
    font-family: ${theme.fontFamily};
    background: ${(props) => theme.backgroundColor[props.styledAs]};
    color: ${(props) => theme.color[props.styledAs]};

    @media screen and (min-width: ${breakpoints.desktop}) {
        padding: ${(props) => theme.padding.desktop[props.size]};
    }
`;

export default InlineNotificationStyled;
