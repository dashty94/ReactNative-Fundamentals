import React from "react"
import { View } from "react-native"

function Borders(props) {
    return (
        <View
            style={{
                backgroundColor: "dodgerblue",
                width: 100,
                height: 100,
                padding: 10,
                paddingHorizontal: 10,
                paddingLeft: 20,
            }}
        >
            <View
                style={{
                    backgroundColor: "gold",
                    width: 50,
                    height: 50,
                }}
            ></View>
            <View
                style={{
                    backgroundColor: "tomato",
                    width: 100,
                    height: 100,
                }}
            ></View>
        </View>
    )
}

export default Borders
