import { StyleSheet, View } from 'react-native'

import AppText from './AppText'
import Constants from 'expo-constants'
import React from 'react'
import colors from '../config/colors'
import { useNetInfo } from '@react-native-community/netinfo'

function OfflineNotice(props) {
    const netinfo = useNetInfo()

    if (netinfo.type !== 'unknown' && netinfo.isInternetReachable === false)
        return (
            <View style={styles.container}>
                <AppText style={styles.text}> No internet Connection </AppText>
            </View>
        )
    return null
}

export default OfflineNotice

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        height: 50,
        width: '100%',
        top: Constants.statusBarHeight,
        position: 'absolute',
        zIndex: 1,
    },
    text: {
        color: colors.white,
    },
})
