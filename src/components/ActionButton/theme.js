import setup from "../../js/setup";

const { colors, fonts, typography } = setup;

console.log(colors);

const theme = {
    borderRadius: "0rem",
    borderStyle: "solid",
    borderWidth: "0.1rem",
    leftMargin: "0.4rem",
    rightMargin: "0.4rem",
    iconMargin: "1rem",
    fontFamily: fonts.primary,
    fontSize: {
        desktop: {
            small: typography.desktop.textSmall,
            medium: typography.desktop.textRegular,
            large: typography.desktop.textLarge,
        },
        mobile: {
            small: typography.mobile.textSmall,
            medium: typography.mobile.textRegular,
            large: typography.mobile.textLarge,
        },
    },
    padding: {
        small: "0.4rem",
        medium: "0.8rem",
        large: "1.2rem",
    },
    backgroundColor: {
        solid: {
            positive: colors.positiveAccent,
            negative: colors.negativeAccent,
            information: colors.informationAccent,
            system: colors.systemAccent,
        },
        outline: {
            positive: colors.white,
            negative: colors.white,
            information: colors.white,
            system: colors.white,
        },
        text: {
            positive: "transparent",
            negative: "transparent",
            information: "transparent",
            system: "transparent",
        },
    },
    borderColor: {
        solid: {
            positive: colors.positiveAccent,
            negative: colors.negativeAccent,
            information: colors.informationAccent,
            system: colors.systemAccent,
        },
        outline: {
            positive: colors.positiveAccent,
            negative: colors.negativeAccent,
            information: colors.informationAccent,
            system: colors.systemAccent,
        },
        text: {
            positive: "transparent",
            negative: "transparent",
            information: "transparent",
            system: "transparent",
        },
    },
    backgroundHoverColor: {
        solid: {
            positive: colors.positiveAccentDark,
            negative: colors.negativeAccentDark,
            information: colors.informationAccentDark,
            system: colors.white,
        },
        outline: {
            positive: colors.positiveAccent,
            negative: colors.negativeAccent,
            information: colors.informationAccent,
            system: colors.systemAccent,
        },
        text: {
            positive: colors.grey200,
            negative: colors.grey200,
            information: colors.grey200,
            system: colors.grey200,
        },
    },
    borderColorHover: {
        solid: {
            positive: colors.positiveAccentDark,
            negative: colors.negativeAccentDark,
            information: colors.informationAccentDark,
            system: colors.systemAccentDark,
        },
        outline: {
            positive: colors.positiveAccent,
            negative: colors.negativeAccent,
            information: colors.informationAccent,
            system: colors.systemAccent,
        },
        text: {
            positive: colors.grey200,
            negative: colors.grey200,
            information: colors.grey200,
            system: colors.grey200,
        },
    },
    color: {
        solid: {
            positive: colors.white,
            negative: colors.white,
            information: colors.white,
            system: colors.white,
        },
        outline: {
            positive: colors.positiveAccent,
            negative: colors.negativeAccent,
            information: colors.informationAccent,
            system: colors.systemAccent,
        },
        text: {
            positive: colors.positiveAccent,
            negative: colors.negativeAccent,
            information: colors.informationAccent,
            system: colors.systemAccent,
        },
    },
    colorHover: {
        solid: {
            positive: colors.white,
            negative: colors.white,
            information: colors.white,
            system: colors.systemAccentDark,
        },
        outline: {
            positive: colors.positiveAccent,
            negative: colors.negativeAccent,
            information: colors.informationAccent,
            system: colors.systemAccent,
        },
        text: {
            positive: colors.positiveAccentDark,
            negative: colors.negativeAccentDark,
            information: colors.informationAccentDark,
            system: colors.systemAccentDark,
        },
    },
};

export default theme;
