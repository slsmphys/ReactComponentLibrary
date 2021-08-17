import setup from "../../js/setup";

const { colors } = setup;

const theme = {
    borderWidth: ".1rem",
    borderColor: {
        normal: colors.systemAccent,
        valid: colors.positiveAccent,
        invalid: colors.negativeAccent,
    },
    color: colors.textDark,
};

export default theme;
