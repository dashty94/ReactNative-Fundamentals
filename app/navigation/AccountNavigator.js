import AccountScreen from '../screens/AccountScreen'
import MessageDetailsScreen from '../screens/MessageDetailsScreen'
import MessagesScreen from '../screens/MessagesScreen'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen name="MessageDetails" component={MessageDetailsScreen} />
    </Stack.Navigator>
)

export default AccountNavigator
