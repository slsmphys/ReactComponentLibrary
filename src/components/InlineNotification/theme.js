import { colors, fonts, typography } from "../../js/setup";

const theme = {
    fontFamily: fonts.primary,
    padding: {
        mobile: {
            small: "0.6rem",
            medium: "0.8rem",
            large: "1rem",
        },
        desktop: {
            small: "0.8rem",
            medium: "1rem",
            large: "1.2rem",
        },
    },
    backgroundColor: {
        success: colors.positiveAccent,
        failure: colors.negativeAccent,
        warning: colors.warningAccent,
    },
    color: {
        success: colors.white,
        failure: colors.white,
        warning: colors.warningText,
    },
};

export default theme;
