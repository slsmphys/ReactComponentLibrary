import colors from "../../js/colors";
import fonts from "../../js/fonts.js";

const { fontFamilies, fontWeights } = fonts;

const theme = {
    borderWidth: ".2rem",
    borderStyle: "solid",
    borderColor: colors.grey400,
    borderRadius: ".8rem",

    backgroundColor: colors.grey200,

    footerBorderTopWidth: ".1rem",
    footerBorderTopStyle: "solid",
    footerBorderTopColor: colors.grey400,

    titleFontFamily: "roboto-light",
    titleFontSize: "2.8rem",
    titleFontWeight: fontWeights.light,
    titleColor: colors.textDark,

    subtitleFontFamily: fontFamilies.stack1,
    subtitleFontSize: "1.4rem",
    subtitleColor: colors.textLight,
};

export default theme;
