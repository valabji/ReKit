import { I18nManager } from "react-native";

export default {
    regular: I18nManager.isRTL ? "Tajawal_400Regular" : "Montserrat_400Regular",
    bold: I18nManager.isRTL ? "Tajawal_700Bold" : "Montserrat_700Bold",
    black: I18nManager.isRTL ? "Tajawal_900Black" : "Montserrat_900Black",
};