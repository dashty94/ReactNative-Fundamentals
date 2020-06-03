import React from "react"
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native"
import colors from "../config/colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={30} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons
                    name="trash-can-outline"
                    color="white"
                    size={35}
                />
            </View>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/chair.jpg")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 40,
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 40,
    },
    image: {
        width: "100%",
        height: "100%",
    },
})

export default ViewImageScreen
