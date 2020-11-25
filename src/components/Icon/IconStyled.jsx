import styled from "styled-components";

import setup from "../../js/setup";
import theme from "./theme";

const IconStyled = styled.div`
    display: block;
    speak: never;
    width: ${(props) => theme.iconSizeMobile[props.size]};
    height: ${(props) => theme.iconSizeMobile[props.size]};

    @media screen and (min-width: ${setup.breakpoints.desktop}) {
        width: ${(props) => theme.iconSizeDesktop[props.size]};
        height: ${(props) => theme.iconSizeDesktop[props.size]};
    }

    &:before {
        font-family: "icons";
        font-size: ${(props) => theme.iconSizeMobile[props.size]};
        content: "${(props) => setup.icons[props.icon]}";
        line-height: 1;

        @media screen and (min-width: ${setup.breakpoints.desktop}) {
            font-size: ${(props) => theme.iconSizeDesktop[props.size]};
        }
    }
`;

export default IconStyled;
