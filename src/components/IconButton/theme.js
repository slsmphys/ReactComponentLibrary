import setup from "../../js/setup";

const { colors } = setup;

const theme = {
    borderRadius: "0rem",
    borderStyle: "solid",
    borderWidth: "0.1rem",
    leftMargin: "0.4rem",
    rightMargin: "0.4rem",
    padding: {
        size: {
            small: "0.4rem",
            medium: "0.8rem",
            large: "1.2rem",
        },
    },
    solid: {
        styledAs: {
            positive: {
                bgColor: colors.positiveAccent,
                borderColor: colors.positiveAccent,
                color: colors.white,
                bgHoverColor: colors.positiveAccentDark,
                borderHoverColor: colors.positiveAccentDark,
                colorHover: colors.white,
            },
            negative: {
                bgColor: colors.negativeAccent,
                borderColor: colors.negativeAccent,
                color: colors.white,
                bgHoverColor: colors.negativeAccentDark,
                borderHoverColor: colors.negativeAccentDark,
                colorHover: colors.white,
            },
            information: {
                bgColor: colors.informationAccent,
                borderColor: colors.informationAccent,
                color: colors.white,
                bgHoverColor: colors.informationAccentDark,
                borderHoverColor: colors.informationAccentDark,
                colorHover: colors.white,
            },
            system: {
                bgColor: colors.white,
                borderColor: colors.systemAccent,
                color: colors.systemAccent,
                bgHoverColor: colors.systemAccent,
                borderHoverColor: colors.systemAccent,
                colorHover: colors.white,
            },
        },
    },
    outline: {
        styledAs: {
            positive: {
                bgColor: colors.white,
                borderColor: colors.positiveAccent,
                color: colors.positiveAccent,
                bgHoverColor: colors.positiveAccentDark,
                borderHoverColor: colors.positiveAccentDark,
                colorHover: colors.white,
            },
            negative: {
                bgColor: colors.white,
                borderColor: colors.negativeAccent,
                color: colors.negativeAccent,
                bgHoverColor: colors.negativeAccentDark,
                borderHoverColor: colors.negativeAccentDark,
                colorHover: colors.white,
            },
            information: {
                bgColor: colors.white,
                borderColor: colors.informationAccent,
                color: colors.informationAccent,
                bgHoverColor: colors.informationAccentDark,
                borderHoverColor: colors.informationAccentDark,
                colorHover: colors.white,
            },
            system: {
                bgColor: colors.white,
                borderColor: colors.systemAccent,
                color: colors.systemAccent,
                bgHoverColor: colors.systemAccentDark,
                borderHoverColor: colors.systemAccentDark,
                colorHover: colors.white,
            },
        },
    },
    text: {
        styledAs: {
            positive: {
                bgColor: "transparent",
                borderColor: "transparent",
                color: colors.positiveAccent,
                bgHoverColor: colors.grey200,
                borderHoverColor: colors.grey200,
                colorHover: colors.positiveAccentDark,
            },
            negative: {
                bgColor: "transparent",
                borderColor: "transparent",
                color: colors.negativeAccent,
                bgHoverColor: colors.grey200,
                borderHoverColor: colors.grey200,
                colorHover: colors.negativeAccentDark,
            },
            information: {
                bgColor: "transparent",
                borderColor: "transparent",
                color: colors.informationAccent,
                bgHoverColor: colors.grey200,
                borderHoverColor: colors.grey200,
                colorHover: colors.informationAccentDark,
            },
            system: {
                bgColor: "transparent",
                borderColor: "transparent",
                color: colors.systemAccent,
                bgHoverColor: colors.grey200,
                borderHoverColor: colors.grey200,
                colorHover: colors.systemAccent,
            },
        },
    },
    disabled: {
        bgColor: colors.disabledAccent,
        borderColor: colors.disabledAccent,
        color: colors.white,
    },
};

export default theme;
