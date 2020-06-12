import { StyleSheet, View } from "react-native"

import AppText from "./AppText"
import Icon from "./Icon"
import React from "react"
import { TouchableOpacity } from "react-native-gesture-handler"

function CategoryPickerItem({ item, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Icon
                    backgroundColor={item.backgroundColor}
                    name={item.icon}
                    size={80}
                />
                <AppText style={styles.label}>{item.label}</AppText>
            </TouchableOpacity>
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
