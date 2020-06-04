import { Platform } from "react-native"
import colors from "./colors"

export default {
    colors,
    text: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    debug: {
        borderColor: "black",
        borderWidth: 1,
    },
}
