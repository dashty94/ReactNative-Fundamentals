import React from "react"
import { View } from "react-native"

function Borders(props) {
    return (
        <View
            style={{
                backgroundColor: "dodgerblue",
                width: 100,
                height: 100,
                borderWidth: 5,
                borderColor: "royalblue",
                borderRadius: 50,
                // borderBottomRightRadius: 12
            }}
        ></View>
    )
}

export default Borders
