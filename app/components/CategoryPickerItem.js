import { StyleSheet, View } from "react-native"

import AppText from "./AppText"
import Icon from "./Icon"
import React from "react"

function CategoryPickerItem({ item, onPress }) {
    return (
        <View style={styles.container}>
            <Icon
                backgroundColor={item.backgroundColor}
                name={item.icon}
                size={80}
            />
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: "center",
        flex: 1,
    },
    label: {
        marginTop: 5,
        textAlign: "center",
    },
})

export default CategoryPickerItem
