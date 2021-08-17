import { colors, fonts, typography } from "../../js/setup";

const theme = {
    fontFamily: fonts.primary,
    fontSizeDesktop: {
        small: typography.desktop.textSmall,
        medium: typography.desktop.textMedium,
        large: typography.desktop.textLarge,
    },
    fontSizeMobile: {
        small: typography.mobile.textSmall,
        medium: typography.mobile.textMedium,
        large: typography.mobile.textLarge,
    },
    iconFontSizeDesktop: {
        small: typography.desktop.iconSmall,
        medium: typography.desktop.iconMedium,
        large: typography.desktop.iconLarge,
    },
    iconFontSizeMobile: {
        small: typography.mobile.iconSmall,
        medium: typography.mobile.iconMedium,
        large: typography.mobile.iconLarge,
    },
    iconMarginRight: "0.6rem",
    textColor: colors.textDark,
};

export default theme;
