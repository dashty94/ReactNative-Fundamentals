import { StyleSheet, View } from "react-native"

import { MaterialCommunityIcons } from "@expo/vector-icons"
import React from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import colors from "../config/colors"

function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="plus-circle"
                    color={colors.white}
                    size={40}
                />
            </View>
        </TouchableOpacity>
    )
}

export default NewListingButton

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        height: 80,
        width: 80,
        borderRadius: 40,
        bottom: 20,
        borderColor: colors.white,
        borderWidth: 10,
    },
})
