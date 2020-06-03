import React from "react"
import { View } from "react-native"

function Borders(props) {
    return (
        <View
            style={{
                backgroundColor: "dodgerblue",
                width: 100,
                height: 100,
                shadowColor: "grey",
                shadowOffset: { width: 0, height: 10 }, // ios only
                shadowOpacity: 1, // ios only
                shadowRadius: 10, // ios only
                elevation: 20, // android only
            }}
        ></View>
    )
}

export default Borders
