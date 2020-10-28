import colors from "../../js/colors";

const theme = {
  outlined: {},
  solid: {
    bgColor: {
      positive: colors.positiveAccent,
      negative: colors.negativeAccent,
      info: colors.informationAccent,
      system: colors.white,
    },
    bgHoverColor: {
      positive: colors.positiveAccentLight,
      negative: colors.negativeAccentLight,
      info: colors.informationAccentLight,
      system: colors.white,
    },
    color: {
      positive: colors.white,
      negative: colors.white,
      info: colors.white,
      system: colors.textDark,
    },
    borderRadius: ".4rem",
    borderWidth: ".1rem",
    borderStyle: "solid",
    borderColor: {
      positive: colors.positiveAccent,
      negative: colors.negativeAccent,
      info: colors.informationAccent,
      system: colors.textDark,
    },
    borderHoverColor: {
      positive: colors.positiveAccentLight,
      negative: colors.negativeAccentLight,
      info: colors.informationAccentLight,
      system: colors.textDark,
    },
    leftMargin: ".4rem",
    rightMargin: ".4rem",
    padding: "1.2rem 2.0rem",
  },
  text: {},
};

export default theme;
