import { StyleSheet, View } from 'react-native'

import AppText from '../components/AppText'
import React from 'react'
import colors from '../config/colors'
import messages from '../api/messages'

function MessageDetailsScreen({ route }) {
    const message = route.params
    return (
        <View style={styles.container}>
            <AppText style={styles.name}>{message.fromUser.name}</AppText>
            <AppText style={styles.content}>{message.content}</AppText>
        </View>
    )
}

export default MessageDetailsScreen

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: colors.white,
    },

    name: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    content: {
        marginTop: 20,
    },
})
