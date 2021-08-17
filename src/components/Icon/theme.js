import setup from "../../js/setup";

const { typography } = setup;

console.log(typography);

const theme = {
    iconSizeMobile: {
        small: typography.mobile.iconSmall,
        medium: typography.mobile.iconRegular,
        large: typography.mobile.iconLarge,
    },
    iconSizeDesktop: {
        small: typography.desktop.iconSmall,
        medium: typography.desktop.iconRegular,
        large: typography.desktop.iconLarge,
    },
};

export default theme;
