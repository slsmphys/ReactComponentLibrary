import colors from "../../js/colors";
import fontweight, { fontstack1 } from "../../js/fonts.js"

const theme = {
  fontFamily: fontstack1,
  fontWeight: fontweight.regular,
  fontSize: "1.6rem",
  outlined: {
    bgColor: {
      positive: colors.white,
      negative: colors.white,
      info: colors.white,
      system: colors.white,
    },
    bgHoverColor: {
      positive: colors.positiveAccent,
      negative: colors.negativeAccent,
      info: colors.informationAccent,
      system: colors.systemAccent,
    },
    color: {
      positive: colors.positiveAccent,
      negative: colors.negativeAccent,
      info: colors.informationAccent,
      system: colors.systemAccent,
    },
    colorHover: {
      positive: colors.white,
      negative: colors.white,
      info: colors.white,
      system: colors.white,
    },
    borderWidth: ".1rem",
    borderStyle: "solid",
    borderColor: {
      positive: colors.positiveAccent,
      negative: colors.negativeAccent,
      info: colors.informationAccent,
      system: colors.systemAccent,
    },
    borderHoverColor: {
      positive: colors.positiveAccent,
      negative: colors.negativeAccent,
      info: colors.informationAccent,
      system: colors.systemAccent,
    },
    leftMargin: ".4rem",
    rightMargin: ".4rem",
    padding: "1.2rem 2.0rem",
  },
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
      system: colors.systemAccentLight,
    },
    color: {
      positive: colors.white,
      negative: colors.white,
      info: colors.white,
      system: colors.systemAccent,
    },
    colorHover: {
      positive: colors.white,
      negative: colors.white,
      info: colors.white,
      system: colors.white,
    },
    borderWidth: ".1rem",
    borderStyle: "solid",
    borderColor: {
      positive: colors.positiveAccent,
      negative: colors.negativeAccent,
      info: colors.informationAccent,
      system: colors.systemAccent,
    },
    borderHoverColor: {
      positive: colors.positiveAccentLight,
      negative: colors.negativeAccentLight,
      info: colors.informationAccentLight,
      system: colors.systemAccentLight,
    },
    leftMargin: ".4rem",
    rightMargin: ".4rem",
    padding: "1.2rem 2.0rem",
  },
  text: {
    bgColor: {
      positive: "transparent",
      negative: "transparent",
      info: "transparent",
      system: "transparent",
    },
    bgHoverColor: {
      positive: colors.grey300,
      negative: colors.grey300,
      info: colors.grey300,
      system: colors.grey300,
    },
    color: {
      positive: colors.positiveAccent,
      negative: colors.negativeAccent,
      info: colors.informationAccent,
      system: colors.systemAccent,
    },
    colorHover: {
      positive: colors.positiveAccent,
      negative: colors.negativeAccent,
      info: colors.informationAccent,
      system: colors.systemAccent,
    },
    borderWidth: ".1rem",
    borderStyle: "solid",
    borderColor: {
      positive: "transparent",
      negative: "transparent",
      info: "transparent",
      system: "transparent",
    },
    borderHoverColor: {
      positive: "transparent",
      negative: "transparent",
      info: "transparent",
      system: "transparent",
    },
    leftMargin: ".4rem",
    rightMargin: ".4rem",
    padding: "1.2rem 2.0rem",
  },
  disabled: {
    bgColor: colors.disabledAccent,
    borderColor: colors.disabledAccent,
    color: colors.white,
  },
  borderRadius: ".6rem",
};

export default theme;
