import * as Permissions from 'expo-permissions'

import { Notifications } from 'expo'
import expoPushTokensApi from '../api/expoPushTokens'
import { useEffect } from 'react'

export default useNotifications = (notificationListener) => {
    useEffect(() => {
        registerForPushNotifications()
        if (notificationListener) Notifications.addListener(notificationListener)
    }, [])

    const registerForPushNotifications = async () => {
        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
            if (!permission.granted) return

            const token = await Notifications.getExpoPushTokenAsync()
            console.log(token)
            expoPushTokensApi.register(token)
        } catch (error) {
            console.log('Error getting push token', error)
        }
    }
}
