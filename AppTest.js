import React from "react"
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  Dimensions,
} from "react-native"
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks"

export default function App() {
  const { landscape } = useDeviceOrientation()

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "70%",
        }}
      ></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: Platform.OS === "ios" ? 100 : 0,
  },
})
