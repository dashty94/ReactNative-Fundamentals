import { SafeAreaView, StyleSheet, View } from "react-native"

import Constands from "expo-constants"
import React from "react"

function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constands.statusBarHeight,
        flex: 1,
    },
    view: {
        flex: 1,
    },
})

export default Screen
