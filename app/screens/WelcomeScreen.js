import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"

import AppButton from "../components/AppButton"
import React from "react"
import routes from "../navigation/routes"

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            blurRadius={5}
            style={styles.backgorund}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/logo-red.png")}
                />
                <Text style={styles.tagline}> Sell what You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton
                    title="Login"
                    onPress={() => navigation.navigate(routes.LOGIN)}
                />
                <AppButton
                    title="Register"
                    color="secondary"
                    onPress={() => navigation.navigate(routes.REGISTER)}
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgorund: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        alignItems: "center",
        position: "absolute",
        top: 100,
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    },
})

export default WelcomeScreen
