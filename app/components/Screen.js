import React from "react"
import Constands from "expo-constants"
import { StyleSheet, SafeAreaView } from "react-native"
function Screen({ children }) {
    return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constands.statusBarHeight,
    },
})

export default Screen
