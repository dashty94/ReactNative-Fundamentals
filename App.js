import { AsyncStorage, Button, Text } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import NetInfo, { useNetInfo } from '@react-native-community/netinfo'
import React, { useState } from 'react'

import { AppLoading } from 'expo'
import AppNavigator from './app/navigation/AppNavigator'
import AuthContext from './app/auth/context'
import AuthNavigator from './app/navigation/AuthNavigator'
import OfflineNotice from './app/components/OfflineNotice'
import Screen from './app/components/Screen'
import authStorage from './app/auth/storage'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import navigationTheme from './app/navigation/navigationTheme'

const Tweets = ({ navigation }) => (
    <Screen>
        <Text>Tweets</Text>
        <Link />
    </Screen>
)

const Link = () => {
    const navigation = useNavigation()

    return <Button title="Click" onPress={() => navigation.navigate('TweetDetails', { id: 1 })} />
}

const TweetDetails = ({ route }) => (
    <Screen>
        <Text>Tweet Detail- {route.params.id}</Text>
    </Screen>
)

const Stack = createStackNavigator()

const StackNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: 'tomato' },
            headerShown: false,
        }}
    >
        <Stack.Screen name="Tweet" component={Tweets} />
        <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
)

const Account = () => {
    return (
        <Screen>
            <Text> Account</Text>
        </Screen>
    )
}

const Tab = createBottomTabNavigator()
const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeBackgroundColor: 'tomato',
                activeTintColor: 'white',
            }}
        >
            <Tab.Screen name="Feed" component={StackNavigator} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    )
}

export default function App() {
    const [user, setUser] = useState()
    const [isReady, setIsReady] = useState(false)

    const restoreUser = async () => {
        const user = await authStorage.getUser()
        if (user) setUser(user)
    }

    if (!isReady) return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <OfflineNotice />
            <NavigationContainer theme={navigationTheme}>
                {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
        </AuthContext.Provider>
    )
}
