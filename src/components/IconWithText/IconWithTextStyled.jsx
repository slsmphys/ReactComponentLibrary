import styled from "styled-components";

import { getIcon } from "../../js/utilities";
import { breakpoints } from "../../js/setup";

import theme from "./theme";

const IconWithTextStyled = styled.div`
    display: inline-flex;
    font-family: ${theme.fontFamily};
    font-size: ${(props) => theme.fontSizeMobile[props.size]};

    @media screen and (min-width: ${breakpoints.desktop}) {
        font-size: ${(props) => theme.fontSizeDesktop[props.size]};
    }

    span {
        display: flex;
        line-height: 1;

        &:before {
            display: flex;
            align-items: center;
            font-family: "icons";
            font-size: ${(props) => theme.iconFontSizeMobile[props.size]};
            margin-right: ${theme.iconMarginRight};
            content: "${(props) => getIcon(props.icon)}";

            @media screen and (min-width: ${breakpoints.desktop}) {
                font-size: ${(props) => theme.iconFontSizeDesktop[props.size]};
            }
        }
    }
`;

export default IconWithTextStyled;
