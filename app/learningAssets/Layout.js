import React from "react"
import { View } from "react-native"

function Borders(props) {
    return (
        <View
            style={{
                backgroundColor: "#fff",
                flex: 1,
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "start",
                alignContent: "start",
                flexDirection: "row-reverse",
                flexWrap: "wrap",
            }}
        >
            <View
                style={{
                    backgroundColor: "dodgerblue",
                    width: 100,
                    height: 100,
                }}
            />
            <View
                style={{ backgroundColor: "gold", width: 100, height: 200 }}
            />
            <View
                style={{ backgroundColor: "tomato", width: 100, height: 300 }}
            />
        </View>
    )
}

export default Borders
