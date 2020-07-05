import { StyleSheet, View } from 'react-native'

import LottieView from 'lottie-react-native'
import React from 'react'

function ActivityIndicator({ visible = false }) {
    if (!visible) return null
    return (
        <View style={styles.overlay}>
            <LottieView autoPlay loop source={require('../assets/animations/loader2.json')} />
        </View>
    )
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        zIndex: 1,
        opacity: 0.8,
    },
})

export default ActivityIndicator
