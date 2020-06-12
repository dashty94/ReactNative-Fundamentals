import { Image, StyleSheet, View } from "react-native"

import AppText from "./AppText"
import React from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import colors from "../config/colors"

function Card({ title, subTtitle, image, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Image source={image} style={styles.image} />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTtitle}>{subTtitle}</AppText>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 7,
    },
    subTtitle: {
        color: colors.secondary,
        fontWeight: "bold",
    },
})

export default Card
