import { Notifications } from 'expo'

export const showNotification = () => {
    Notifications.presentLocalNotificationAsync({
        title: 'Test',
        body: 'Local notifications',
    })
}

export const scheduleNotification = () => {
    Notifications.scheduleLocalNotificationAsync(
        {
            title: 'Test',
            body: 'Local notifications',
        },
        {
            time: new Date().getTime() + 2000,
        }
    )
}
